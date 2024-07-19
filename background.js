chrome.tabs.onCreated.addListener(function(tab) {
    if (tab.url === "about:newtab") {
      chrome.tabs.update(tab.id, { url: chrome.extension.getURL("newtab.html") });
    }
  });