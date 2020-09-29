/* eslint-disable no-var */
var iframe = document.getElementById('booky'),
  loadingSpinner = document.getElementById('loading__spinner'),
  loadingWrapper = document.getElementById('loading'),
  body = document.getElementsByTagName('body')[0],
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

function transitionEndCallback() {
  loadingSpinner.removeEventListener('transitionend', transitionEndCallback);
  loadingSpinner.parentNode && loadingSpinner.parentNode.removeChild(loadingSpinner);
}

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
// eslint-disable-next-line max-statements
window.addEventListener('message', function(event) {
  var message = event.data;
  
  if (event.origin === host) {
    if (message.ready) {
      sendToIframe(pageData);
      loadingSpinner.addEventListener('transitionend', transitionEndCallback);
      loadingSpinner.classList.add('loading__spinner--hide');
      loadingWrapper.classList.add('loading--hide');
    }

    if (message.darkMode) {
      body.classList.add('booky--dark-mode');
    } else if (message.darkMode === false) {
      body.classList.remove('booky--dark-mode');
    }

    if (message.close) {
      window.close();
    }
  }
});

/* eslint-enable no-var */
