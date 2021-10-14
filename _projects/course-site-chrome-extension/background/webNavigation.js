let tabId;
let currentUrl = "";

chrome.webRequest.onCompleted.addListener(
  (details) => {
    const parsedUrl = new URL(details.url);

    if (currentUrl && currentUrl.indexOf(parsedUrl.pathname) > -1 && tabId) {
      chrome.tabs.sendMessage(tabId, { type: "page-changed" });
    }
  },
  { urls: ["https://courses.webdevsimplified.com/courses/*"] }
);

chrome.webNavigation.onHistoryStateUpdated.addListener(
  (details) => {
    tabId = details.tabId;
    currentUrl = details.url;
  },
  {
    url: [
      {
        hostEquals: "courses.webdevsimplified.com",
        pathPrefix: "/courses/",
      },
    ],
  }
);
