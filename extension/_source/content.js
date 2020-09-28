/* eslint-disable no-var */
function getDescription() {
  var meta = document.querySelector('meta[name=description]'),
    description = meta ? meta.getAttribute('content') : '';

  return description;
}

chrome.runtime.connect().postMessage({
  description: getDescription()
});

/* eslint-enable no-var */
