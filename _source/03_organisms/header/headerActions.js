/**
 * Action types
 */
export const TOGGLE_MAIN_MENU = 'TOGGLE_MAIN_MENU';
export const CLOSE_MAIN_MENU = 'CLOSE_MAIN_MENU';


/**
 * Action creators
 */
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
