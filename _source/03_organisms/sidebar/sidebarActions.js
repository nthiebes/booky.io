/**
 * Action types
 */
export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
export const CLOSE_SIDEBAR = 'CLOSE_SIDEBAR';


/**
 * Action creators
 */
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
