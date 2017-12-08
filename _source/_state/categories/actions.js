export const ADD_CATEGORY = 'ADD_CATEGORY';
export const TOGGLE_CATEGORY = 'TOGGLE_CATEGORY';
export const ADD_BOOKMARK = 'ADD_BOOKMARK';

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

export function addBookmark(data) {
  return {
    type: ADD_BOOKMARK,
    data
  };
}
