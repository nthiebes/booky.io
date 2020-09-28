/* eslint-disable no-var */
var iframe = document.getElementById('booky'),
  devHost = 'http://localhost:3000',
  prodHost = 'https://beta.booky.io',
  host = prodHost,
  pageData = {};
  // environment = 'production',
  // id;

chrome.management.getSelf(function(extensionInfo) {
  if (extensionInfo.installType === 'development') {
    // environment = 'development';
    host = devHost;
  }
  // id = extensionInfo.id;
});

document.addEventListener('DOMContentLoaded', function() {
  // Load the content script
  chrome.tabs.executeScript(null, { file: 'content.js' });
});

// Connect to the current tab
chrome.runtime.onConnect.addListener(function(port) {
  var tab = port.sender.tab;

  pageData.title = tab.title;
  pageData.url = tab.url;

  // This will get called by the content script we execute in the tab
  port.onMessage.addListener(function(page) {
    pageData.description = page.description;
  });
});

function sendToIframe(data) {
  var receiver = iframe.contentWindow;
  
  receiver.postMessage(data, host);
}

// Messages from the booky iframe
window.addEventListener('message', function(event) {
  var message = event.data;
  
  if (event.origin === host && message === 'ready') {
    sendToIframe(pageData);
  }
});

/* eslint-enable no-var */
