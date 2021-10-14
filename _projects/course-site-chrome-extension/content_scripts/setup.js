import setupAutoplay from "./autoplay.js";

function setup() {
  setupAutoplay();
}

setup();

chrome.runtime.onMessage.addListener(function (request) {
  if (request && request.type === "page-changed") setup();
});
