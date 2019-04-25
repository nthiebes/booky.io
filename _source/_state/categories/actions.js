import fetcher from '../../_utils/fetcher';

export const ADD_BOOKMARK = 'ADD_BOOKMARK';
export const EDIT_BOOKMARK = 'EDIT_BOOKMARK';
export const DELETE_BOOKMARK = 'DELETE_BOOKMARK';
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const EDIT_CATEGORY = 'EDIT_CATEGORY';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';
export const TOGGLE_CATEGORY = 'TOGGLE_CATEGORY';
export const DRAG_BOOKMARK = 'DRAG_BOOKMARK';
export const SET_CATEGORIES = 'SET_CATEGORIES';

export function addBookmark(payload) {
  return {
    type: ADD_BOOKMARK,
    payload
  };
}

export function editBookmark(payload) {
  return {
    type: EDIT_BOOKMARK,
    payload
  };
}

export function deleteBookmark(payload) {
  return {
    type: DELETE_BOOKMARK,
    payload
  };
}

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

export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  categories
});

export const getCategories = () => ((dispatch) => {
  fetcher({
    url: '/categories',
    onSuccess: (data) => {
      console.log('categories', data);

      // onSuccess && onSuccess(data);
    },
    onError: (error) => {
      console.log('error', error);
      // onError && onError(error);
    }
  });
});
