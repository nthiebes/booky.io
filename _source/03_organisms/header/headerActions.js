export const TOGGLE_MAIN_MENU = 'TOGGLE_MAIN_MENU';
export const CLOSE_MAIN_MENU = 'CLOSE_MAIN_MENU';
export const TOGGLE_DASHBOARDS = 'TOGGLE_DASHBOARDS';
export const CLOSE_DASHBOARDS = 'CLOSE_DASHBOARDS';

export function toggleMainMenu() {
    return {
        'type': TOGGLE_MAIN_MENU
    };
}

export function closeMainMenu() {
    return {
        'type': CLOSE_MAIN_MENU
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
