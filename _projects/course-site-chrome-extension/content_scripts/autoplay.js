import { STORAGE_KEYS } from "../globals.js";
import { getStorageItem } from "../utils/chromeStorage.js";

let startVideo = false;

export default async function setupAutoplay() {
  const autoplay = await getStorageItem(STORAGE_KEYS.AUTOPLAY);
  if (!autoplay) return;

  const nextButton = getNextButton();
  if (nextButton == null) return;

  if (startVideo) {
    const playButton = await getPlayButton();
    playButton.click();
  }

  startVideo = false;
  const video = await getVideo();
  video.addEventListener("ended", () => {
    startVideo = true;
    nextButton.click();
  });
}

function getNextButton() {
  const courseButtons = [
    ...document.querySelectorAll(".user-course-pager a[data-block-id]"),
  ];

  return courseButtons.find((button) => {
    return (
      button.textContent.includes("Next") || button.textContent.includes("→")
    );
  });
}

function getPlayButton() {
  const hasResumeButton = getWistiaData().resume_time > 0;
  if (hasResumeButton) {
    return getResumeButton();
  } else {
    return getStartButton();
  }
}

function getStartButton() {
  return new Promise((resolve) => {
    const observer = new MutationObserver((mutationList, o) => {
      mutationList.forEach((mutation) => {
        if (
          mutation.type === "childList" &&
          (mutation.target.matches(".w-big-play-button") ||
            mutation.target.querySelector(".w-big-play-button"))
        ) {
          o.disconnect();
          if (mutation.target.matches(".w-big-play-button")) {
            resolve(mutation.target);
          } else {
            resolve(mutation.target.querySelector(".w-big-play-button"));
          }
        }
      });
    });
    observer.observe(document.querySelector(".wistia_embed"), {
      subtree: true,
      childList: true,
    });

    const button = document.querySelector(".w-big-play-button");
    if (button) {
      observer.disconnect();
      resolve(button);
    }
  });
}

function getResumeButton() {
  return new Promise((resolve) => {
    const observer = new MutationObserver((mutationList, o) => {
      mutationList.forEach((mutation) => {
        if (
          mutation.type === "childList" &&
          mutation.target.textContent.includes("Skip to where you left off")
        ) {
          o.disconnect();
          if (mutation.target.matches("a")) return resolve(mutation.target);
          const buttons = [...mutation.target.querySelectorAll("a")];
          const resumeButton = buttons.find((button) => {
            return button.textContent.includes("Skip to where you left off");
          });
          if (resumeButton) resolve(resumeButton);
        }
      });
    });

    observer.observe(document.querySelector(".wistia_embed"), {
      subtree: true,
      childList: true,
    });

    const buttons = [...document.querySelectorAll(".w-chrome a")];
    const resumeButton = buttons.find((button) => {
      return button.textContent.includes("Skip to where you left off");
    });
    if (resumeButton) {
      observer.disconnect();
      resolve(resumeButton);
    }
  });
}

function getVideo() {
  return new Promise((resolve) => {
    const observer = new MutationObserver((mutationList, o) => {
      mutationList.forEach((mutation) => {
        if (mutation.type === "childList" && mutation.target.matches("video")) {
          o.disconnect();
          resolve(mutation.target);
        }
      });
    });
    observer.observe(document.querySelector(".wistia_embed"), {
      subtree: true,
      childList: true,
    });

    const video = document.querySelector(".w-video-wrapper > video");
    if (video) {
      observer.disconnect();
      resolve(video);
    }
  });
}

function getWistiaId() {
  const wistiaEmbed = document.querySelector(".wistia_embed");
  const wistiaIdClass = Array.from(wistiaEmbed.classList).find((c) => {
    return c.startsWith("wistia_async_");
  });

  if (wistiaIdClass != null) return wistiaIdClass.replace(/^wistia_async_/, "");
  return wistiaEmbed.id.replace(/-1$/, "");
}

function getWistiaData() {
  const localWistiaData = JSON.parse(localStorage.getItem("wistia")) || {};
  const currentWistiaVideo = localWistiaData[window.location] || {};
  return currentWistiaVideo[getWistiaId()] || { resume_time: 0 };
}
