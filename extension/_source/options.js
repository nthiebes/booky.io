var saveAllTabs = document.getElementById('save-all-tabs'),
  tabsPermission = { permissions: ['tabs'] };

document.querySelectorAll('[data-i18n]').forEach(function (element) {
  element.textContent = chrome.i18n.getMessage(element.dataset.i18n);
});

async function updateCheckbox() {
  saveAllTabs.checked = await chrome.permissions.contains(tabsPermission);
}

// The browser only shows the permission prompt when this runs in a click
// handler of an extension page, which is why the setting lives here and not
// in the booky iframe of the popup
saveAllTabs.addEventListener('change', async function () {
  if (saveAllTabs.checked) {
    await chrome.permissions.request(tabsPermission);
  } else {
    await chrome.permissions.remove(tabsPermission);
  }

  updateCheckbox();
});

// The permission can also be revoked in the browser's extension settings
chrome.permissions.onAdded.addListener(updateCheckbox);
chrome.permissions.onRemoved.addListener(updateCheckbox);

updateCheckbox();
