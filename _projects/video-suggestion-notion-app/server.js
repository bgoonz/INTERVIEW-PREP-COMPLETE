require("dotenv").config();
const express = require("express");
const notion = require("./notion");
const path = require("path");
const rateLimit = require("express-rate-limit");
const admin = require("firebase-admin");
const bannedIps = require("./bannedIps.json");

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");
app.set("trust proxy", 1);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(requireHTTPS);
app.use(checkForBannedIp);

const ONE_HOUR_IN_MILLISECONDS = 1000 * 60 * 60;
const ONE_DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

let tags = [];
notion.getTags().then((data) => (tags = data));

const router = express.Router();
router.use(express.static(path.join(__dirname, "public")));
app.use("/suggestions", router);

setInterval(async () => {
  tags = await notion.getTags();
}, ONE_HOUR_IN_MILLISECONDS);

router.get("/", async (req, res) => {
  try {
    const currentPageCursor = req.query.pageCursor;
    const suggestionResults = await notion.getSuggestions(currentPageCursor);
    res.render("index", {
      tags,
      atStart: currentPageCursor == null,
      ...suggestionResults,
    });
  } catch (e) {
    console.error(e);
    res.status(500).send("Error");
  }
});

router.post(
  "/create-suggestion",
  requiresAuth,
  rateLimit({
    max: 2,
    skipFailedRequests: true,
    windowMs: ONE_DAY_IN_MILLISECONDS,
    message: "You can only create 2 suggestions per day",
    keyGenerator: (req) => req.userUid,
  }),
  async (req, res) => {
    try {
      const { title, description, isProject, tagIds = [] } = req.body;
      await notion.createSuggestion({
        title,
        description,
        isProject: isProject != null,
        email: req.email,
        tags: (Array.isArray(tagIds) ? tagIds : [tagIds]).map((tagId) => {
          return { id: tagId };
        }),
      });
    } catch (e) {
      console.error(e);
      res.status(500).send("Error");
    }
    res.redirect("/suggestions");
  }
);

router.post(
  "/up-vote-suggestion",
  requiresAuth,
  rateLimit({
    max: 1,
    skipFailedRequests: true,
    windowMs: ONE_DAY_IN_MILLISECONDS,
    message: "You can only up vote each suggestion once",
    keyGenerator: (req) => `${req.userUid}-${req.body.suggestionId}`,
  }),
  async (req, res) => {
    try {
      const votes = await notion.upVoteSuggestion(req.body.suggestionId);
      res.json({ votes });
    } catch (e) {
      console.error(e);
      res.status(500).send("Error");
    }
  }
);

router.post(
  "/report-suggestion",
  requiresAuth,
  rateLimit({
    max: 1,
    skipFailedRequests: true,
    windowMs: ONE_DAY_IN_MILLISECONDS,
    message: "You can only report each suggestion once",
    keyGenerator: (req) => `${req.userUid}-${req.body.suggestionId}`,
  }),
  async (req, res) => {
    try {
      const reports = await notion.reportSuggestion(req.body.suggestionId);
      res.json({ remove: reports >= notion.REPORT_LIMIT });
    } catch (e) {
      console.error(e);
      res.status(500).send("Error");
    }
  }
);

function requireHTTPS(req, res, next) {
  // The 'x-forwarded-proto' check is for Heroku
  if (
    !req.secure &&
    req.get("x-forwarded-proto") !== "https" &&
    process.env.NODE_ENV !== "development"
  ) {
    return res.redirect("https://" + req.get("host") + req.url);
  }
  next();
}

function checkForBannedIp(req, res, next) {
  if (bannedIps.includes(req.ip)) return res.status(500).send("Error");
  next();
}

function requiresAuth(req, res, next) {
  if (req.body.firebaseToken == null) {
    return res.status(401).send("You must be authenticated to do this");
  }

  admin
    .auth()
    .verifyIdToken(req.body.firebaseToken)
    .then((decodedToken) => {
      req.userUid = decodedToken.uid;
      req.email = decodedToken.email;
      next();
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error");
    });
}

app.listen(process.env.PORT);
