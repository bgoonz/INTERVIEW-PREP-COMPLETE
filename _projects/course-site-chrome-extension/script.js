async function load() {
  await import(chrome.extension.getURL("content_scripts/setup.js"));
}

load();
