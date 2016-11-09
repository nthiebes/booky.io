/**
 * Action types
 */
export const TOGGLE_SEARCH = 'TOGGLE_SEARCH';
export const TOGGLE_EDIT_MODE = 'TOGGLE_EDIT_MODE';
export const UPDATE_STICKY = 'UPDATE_STICKY';


/**
 * Action creators
 */
export function toggleSearch() {
    return {
        'type': TOGGLE_SEARCH
    };
}

export function toggleEditMode() {
    return {
        'type': TOGGLE_EDIT_MODE
    };
}

export function updateSticky(sticky) {
    return {
        'type': UPDATE_STICKY,
        'sticky': sticky
    };
}
