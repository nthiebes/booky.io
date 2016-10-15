/**
 * Action types
 */
export const TOGGLE_MAIN_MENU = 'TOGGLE_MAIN_MENU';
export const TOGGLE_EDIT_MODE = 'TOGGLE_EDIT_MODE';


/**
 * Action creators
 */
export function toggleMainMenu() {
    return {
        'type': TOGGLE_MAIN_MENU
    };
}

export function toggleEditMode() {
    return {
        'type': TOGGLE_EDIT_MODE
    };
}
