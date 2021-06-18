/* eslint-disable no-var */
function getDescriptionForBooky() {
  var meta = document.querySelector('meta[name=description]'),
    description = meta ? meta.getAttribute('content') : '';

  return description;
}

chrome.runtime.connect().postMessage({
  description: getDescriptionForBooky()
});

/* eslint-enable no-var */
