export const ADD_CATEGORY = 'ADD_CATEGORY';
export const TOGGLE_CATEGORY = 'TOGGLE_CATEGORY';
export const DRAG_BOOKMARK = 'DRAG_BOOKMARK';

export function addCategory(name, id) {
  return {
    type: ADD_CATEGORY,
    name,
    id
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
