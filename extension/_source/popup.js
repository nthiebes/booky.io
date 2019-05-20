const checkboxes = {
  blur: document.getElementById('blur-checkbox'),
  brightness: document.getElementById('brightness-checkbox')
};
const inputs = {
  blur: document.getElementById('blur-input'),
  brightness: document.getElementById('brightness-input')
};
let filters = {};

/*
 * Get initial data from local storage
 */
chrome.storage.sync.get(Object.keys(checkboxes), (data) => {
  filters = data || {};

  Object.keys(checkboxes).forEach((key) => {
    checkboxes[key].checked = data[key].checked;
  });

  Object.keys(inputs).forEach((key) => {
    inputs[key].value = data[key].value;
  });

  updateFilter();
});

/*
 * Listen to storage changes to update filters
 */
chrome.storage.onChanged.addListener((changes) => {
  for (const key in changes) {
    filters[key] = Object.assign(filters[key], changes[key].newValue);
  }

  updateFilter();
});

/*
 * Event listener
 */
Object.keys(checkboxes).forEach((key) => {
  checkboxes[key].addEventListener('change', () => {
    chrome.storage.sync.set({
      [key]: Object.assign(filters[key], { checked: checkboxes[key].checked })
    });
  });
});

Object.keys(inputs).forEach((key) => {
  inputs[key].addEventListener('change', () => {
    chrome.storage.sync.set({
      [key]: Object.assign(filters[key], { value: inputs[key].value })
    });
  });
});

/*
 * Update the filter css on the website
 */
function updateFilter() {
  let values = Object.keys(filters)
    .filter((key) => filters[key].checked)
    .map((key) => `${key}(${filters[key].value}${filters[key].unit})`);

  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.executeScript(
      tabs[0].id,
      {code: `document.body.style.filter = "${ values.join(' ') }";`}
    );
  });
}
