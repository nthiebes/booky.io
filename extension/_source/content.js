/* eslint-disable no-var */
function getFavicon() {
  var favicon,
    nodeList = document.getElementsByTagName('link'),
    i;

  for (i = 0; i < nodeList.length; i++) {
    if ((nodeList[i].getAttribute('rel') === 'icon') || (nodeList[i].getAttribute('rel') === 'shortcut icon')) {
      favicon = nodeList[i].getAttribute('href');
    }
  }
  return favicon ? (window.location.origin + '/' + favicon.replace(/^\//g, '')) : null;
}

function getDescription() {
  var meta = document.querySelector('meta[name=description]'),
    description = meta ? meta.getAttribute('content') : '';

  return description;
}

chrome.runtime.connect().postMessage({
  favicon: getFavicon(),
  description: getDescription()
});

/* eslint-enable no-var */
