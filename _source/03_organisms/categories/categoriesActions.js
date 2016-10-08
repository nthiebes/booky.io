/**
 * Action types
 */
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const TOGGLE_CATEGORY = 'TOGGLE_CATEGORY';


/**
 * Action creators
 */
export function addCategory(name, id) {
    return {
        'type': ADD_CATEGORY,
        name,
        id
    };
}

export function toggleCategory(id) {
    return {
        'type': TOGGLE_CATEGORY,
        id
    };
}
