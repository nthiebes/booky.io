/* eslint-disable no-var */
var iframe = document.getElementById('booky'),
  pageData = {};

function sendToIframe(data) {
  var receiver = iframe.contentWindow;
  
  receiver.postMessage(data, 'http://localhost:3000'); // https://booky.io
}

/*
 * Update the filter css on the website
 */
// function updateFilter() {
//   let values = Object.keys(filters)
//     .filter((key) => filters[key].checked)
//     .map((key) => `${key}(${filters[key].value}${filters[key].unit})`);

//   chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
//     chrome.tabs.executeScript(
//       tabs[0].id,
//       {code: `document.body.style.filter = "${ values.join(' ') }";`}
//     );
//   });
// }

// Load the content script
document.addEventListener('DOMContentLoaded', function() {
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
    pageData.favicon = page.favicon;
  });
});

// Messages from the booky iframe
window.addEventListener('message', function(event) {
  var message = event.data;
  
  if (event.origin === 'http://localhost:3000') { // https://booky.io
    if (message === 'ready') {
      sendToIframe(pageData);
    }
  }
});

/* eslint-enable no-var */
