const express = require("express");
const router = express.Router();
const admin = require("firebase-admin");
const db = admin.database();

router.get("/", function (req, res, next) {
  const ref = db.ref("events");
  ref.once("value", function (snap) {
    res.json({ body: snap.val() });
  });
});

router.post("/", function (req, res, next) {
  const { date, img, eventStartTime, eventEndTime, eventDescription } =
    req.body;
  const ref = db.ref("events");
  ref
    .push({
      date,
      eventEndTime,
      eventStartTime,
      img,
      eventDescription,
    })
    .then((data) => {
      console.log(data.getKey());
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(error.message);
      res.sendStatus(500);
    });
});

router.put("/:id", function (req, res, next) {
  const { date, eventStartTime, id, eventEndTime, eventDescription } = req.body;
  const ref = db.ref("events/" + id).update({
    date,
    eventEndTime,
    eventStartTime,
    eventDescription,
  });
  res.sendStatus(200);
});

router.delete("/:id", function (req, res, next) {
  const { id } = req.body;
  let del_ref = admin.database().ref("events/" + id);
  del_ref
    .remove()
    .then(function () {
      res.sendStatus(200);
    })
    .catch(function (error) {
      console.log("Error deleting data:", error);
      res.sendStatus(500);
    });
});

module.exports = router;
