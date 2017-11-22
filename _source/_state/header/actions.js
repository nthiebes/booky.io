export const TOGGLE_MENU = 'TOGGLE_MENU';
export const CLOSE_MENU = 'CLOSE_MENU';
export const TOGGLE_DASHBOARDS = 'TOGGLE_DASHBOARDS';
export const CLOSE_DASHBOARDS = 'CLOSE_DASHBOARDS';

export function toggleMenu() {
  return {
    'type': TOGGLE_MENU
  };
}

export function closeMenu() {
  return {
    'type': CLOSE_MENU
  };
}

export function toggleDashboards() {
  return {
    'type': TOGGLE_DASHBOARDS
  };
}

export function closeDashboards() {
  return {
    'type': CLOSE_DASHBOARDS
  };
}
