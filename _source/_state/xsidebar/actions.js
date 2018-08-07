export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
export const CLOSE_SIDEBAR = 'CLOSE_SIDEBAR';
export const TOGGLE_NOTES = 'TOGGLE_NOTES';
export const TOGGLE_AUTOFILL = 'TOGGLE_AUTOFILL';
export const TOGGLE_NEWTAB = 'TOGGLE_NEWTAB';
export const TOGGLE_STICKY_HEADER = 'TOGGLE_STICKY_HEADER';
export const TOGGLE_STICKY_TOOLBAR = 'TOGGLE_STICKY_TOOLBAR';
export const TOGGLE_MAX_WIDTH = 'TOGGLE_MAX_WIDTH';
export const UPDATE_GLOBAL_COLOR = 'UPDATE_GLOBAL_COLOR';
export const UPDATE_HEADER_COLOR = 'UPDATE_HEADER_COLOR';
export const UPDATE_DASHBOARD_TYPE = 'UPDATE_DASHBOARD_TYPE';

export function toggleSidebar() {
  return {
    'type': TOGGLE_SIDEBAR
  };
}

export function closeSidebar() {
  return {
    'type': CLOSE_SIDEBAR
  };
}

export function toggleNotes() {
  return {
    'type': TOGGLE_NOTES
  };
}

export function toggleAutofill() {
  return {
    'type': TOGGLE_AUTOFILL
  };
}

export function toggleNewtab() {
  return {
    'type': TOGGLE_NEWTAB
  };
}

export function toggleStickyHeader() {
  return {
    'type': TOGGLE_STICKY_HEADER
  };
}

export function toggleStickyToolbar() {
  return {
    'type': TOGGLE_STICKY_TOOLBAR
  };
}

export function toggleMaxWidth() {
  return {
    'type': TOGGLE_MAX_WIDTH
  };
}

export function updateGlobalColor(key) {
  return {
    'type': UPDATE_GLOBAL_COLOR,
    'color': key
  };
}

export function updateHeaderColor(key) {
  return {
    'type': UPDATE_HEADER_COLOR,
    'color': key
  };
}

export function updateDashboardType(key) {
  return {
    'type': UPDATE_DASHBOARD_TYPE,
    'dashboard': key
  };
}
