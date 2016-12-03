export const TOGGLE_SEARCH = 'TOGGLE_SEARCH';
export const TOGGLE_EDIT_MODE = 'TOGGLE_EDIT_MODE';
export const UPDATE_STICKY = 'UPDATE_STICKY';

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

export function updateCurrentlySticky(sticky) {
    return {
        'type': UPDATE_STICKY,
        'currentlySticky': sticky
    };
}
