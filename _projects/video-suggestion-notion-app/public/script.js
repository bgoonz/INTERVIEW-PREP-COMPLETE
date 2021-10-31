document.addEventListener("click", (e) => {
  if (e.target.matches("[data-up-vote-btn]")) handleUpVote(e.target);
  if (e.target.matches("[data-report-btn], [data-report-btn] *"))
    handleReportVote(e.target);
  if (e.target.matches("[data-sign-in-btn]")) handleLogIn();
});

document.querySelector("[data-form]").addEventListener("submit", (e) => {
  const submitBtn = e.target.querySelector("[data-submit-btn]");
  if (submitBtn.disabled) e.preventDefault();
  submitBtn.disabled = true;
});

function handleUpVote(button) {
  if (firebaseToken == null) return alert("You must be signed in to vote");
  const suggestionCard = button.closest("[data-suggestion-id]");
  button.disabled = true;
  fetch("/suggestions/up-vote-suggestion", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      suggestionId: suggestionCard.dataset.suggestionId,
      firebaseToken,
    }),
  })
    .then((res) => {
      if (res.ok) return res.json();
      return res.text().then((text) => Promise.reject(text));
    })
    .then(({ votes }) => {
      const upVoteCount = suggestionCard.querySelector("[data-up-vote-count]");
      upVoteCount.textContent = votes;
    })
    .catch(alert)
    .finally(() => {
      button.disabled = false;
    });
}

function handleReportVote(button) {
  if (firebaseToken == null) {
    return alert("You must be signed in to report suggestions");
  }
  const suggestionCard = button.closest("[data-suggestion-id]");
  button.disabled = true;
  fetch("/suggestions/report-suggestion", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      suggestionId: suggestionCard.dataset.suggestionId,
      firebaseToken,
    }),
  })
    .then((res) => {
      if (res.ok) return res.json();
      return res.text().then((text) => Promise.reject(text));
    })
    .then(({ remove }) => {
      if (remove) suggestionCard.closest("[data-card-col]").remove();
      alert("Thank you for your report. We will look into this suggestion.");
    })
    .catch(alert)
    .finally(() => {
      button.disabled = false;
    });
}

const firebaseConfig = {
  apiKey: "AIzaSyCTyp8LoTCzxNnjY_8Y8R2ZR-LRYupk65Q",
  authDomain: "wds-suggestions.firebaseapp.com",
  projectId: "wds-suggestions",
  appId: "1:409487658595:web:03bc344b810351edbeb256",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(setFirebaseUser);

function setFirebaseUser(user) {
  if (user) {
    user.getIdToken(true).then((token) => {
      firebaseToken = token;
      document.querySelector("[data-token-input]").value = firebaseToken;
    });
    document.querySelectorAll("[data-auth-required]").forEach((elem) => {
      elem.classList.remove("d-none");
    });
    document.querySelectorAll("[data-logged-out]").forEach((elem) => {
      elem.classList.add("d-none");
    });
  } else {
    firebaseToken = undefined;
    document.querySelectorAll("[data-auth-required]").forEach((elem) => {
      elem.classList.add("d-none");
    });
    document.querySelectorAll("[data-logged-out]").forEach((elem) => {
      elem.classList.remove("d-none");
    });
    document.querySelector("[data-token-input]").value = "";
  }
}

function handleLogIn() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      setFirebaseUser(result.user);
    });
}
