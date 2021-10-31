export function getStorageItem(key) {
  return new Promise((resolve) => {
    if (key) {
      chrome.storage.sync.get(key, (obj) => {
        resolve(obj[key]);
      });
    } else {
      chrome.storage.sync.get(resolve);
    }
  });
}

export function setStorageItem(key, value) {
  return new Promise((resolve) => {
    chrome.storage.sync.set({ [key]: value }, resolve);
  });
}

export function setAllStorageItems(obj) {
  return new Promise((resolve) => {
    chrome.storage.sync.set(obj, resolve);
  });
}
