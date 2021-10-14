import { DEFAULT_STORAGE_VALUES } from "../globals.js";
import { getStorageItem, setAllStorageItems } from "../utils/chromeStorage.js";

chrome.runtime.onInstalled.addListener(async () => {
  const storage = await getStorageItem();
  setAllStorageItems({ ...DEFAULT_STORAGE_VALUES, ...storage });
});
