import { STORAGE_KEYS } from "../globals.js";
import { setStorageItem, getStorageItem } from "../utils/chromeStorage.js";

const INPUTS = [
  {
    selector: "#autoplay-checkbox",
    valueProperty: "checked",
    key: STORAGE_KEYS.AUTOPLAY,
  },
];

function setupInputs() {
  INPUTS.map((input) => {
    const element = document.querySelector(input.selector);
    getStorageItem(input.key).then((value) => {
      element[input.valueProperty] = value;
    });

    element.addEventListener("change", () => {
      setStorageItem(input.key, element[input.valueProperty]);
    });
  });
}

setupInputs();

document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    chrome.tabs.create({ active: true, url: link.href });
  });
});
