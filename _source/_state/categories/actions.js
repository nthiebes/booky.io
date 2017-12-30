export const ADD_CATEGORY = 'ADD_CATEGORY';
export const EDIT_CATEGORY = 'EDIT_CATEGORY';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';
export const TOGGLE_CATEGORY = 'TOGGLE_CATEGORY';
export const DRAG_BOOKMARK = 'DRAG_BOOKMARK';

export function addCategory(payload) {
  return {
    type: ADD_CATEGORY,
    payload
  };
}

export function editCategory(payload) {
  return {
    type: EDIT_CATEGORY,
    payload
  };
}

export function deleteCategory(payload) {
  return {
    type: DELETE_CATEGORY,
    payload
  };
}

export function toggleCategory(id) {
  return {
    type: TOGGLE_CATEGORY,
    id
  };
}

export function dragBookmark(data) {
  return {
    type: DRAG_BOOKMARK,
    data
  };
}
