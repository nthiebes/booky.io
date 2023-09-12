/* eslint-disable no-var */
var iframe = document.getElementById('booky'),
  loadingSpinner = document.getElementById('loading__spinner'),
  loadingWrapper = document.getElementById('loading'),
  body = document.getElementsByTagName('body')[0],
  devHost = 'http://localhost:3000',
  prodHost = 'https://booky.io',
  host = prodHost,
  pageData = {};

chrome.management.getSelf(function (extensionInfo) {
  if (extensionInfo.installType === 'development') {
    host = devHost;
  }

  chrome.storage.local.get(['activeTab'], function ({ activeTab }) {
    iframe.src = host + `/extension/${activeTab || 'add'}`;
  });
});

function transitionEndCallback() {
  loadingSpinner.removeEventListener('transitionend', transitionEndCallback);
  loadingSpinner.parentNode &&
    loadingSpinner.parentNode.removeChild(loadingSpinner);
}

async function getCurrentTab() {
  const queryOptions = { active: true, currentWindow: true };
  const [tab] = await chrome.tabs.query(queryOptions);

  return tab;
}

document.addEventListener('DOMContentLoaded', async function () {
  const tab = await getCurrentTab();

  // Load the content script
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['content.js']
  });
});

// Connect to the current tab
chrome.runtime.onConnect.addListener(function (port) {
  var tab = port.sender.tab;

  pageData.title = tab.title;
  pageData.url = tab.url;

  // This will get called by the content script we execute in the tab
  port.onMessage.addListener(function (page) {
    pageData.description = page.description;
  });
});

function sendToIframe(data) {
  var receiver = iframe.contentWindow;

  receiver.postMessage(
    {
      ...data,
      type: 'BOOKY'
    },
    host
  );
}

// Messages from the booky iframe
// eslint-disable-next-line max-statements
window.addEventListener('message', function (event) {
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

    if (message.activeTab) {
      chrome.storage.local.set({ activeTab: message.activeTab });
    }
  }
});

/* eslint-enable no-var */
