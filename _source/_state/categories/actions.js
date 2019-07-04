import fetcher from '../../_utils/fetcher';
import { updateDashboardsData } from '../dashboards/actions';

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

export const getCategories = (id) => ((dispatch) => {
  fetcher({
    url: `/dashboard/${id}/categories`,
    onSuccess: (data) => {
      dispatch(setCategories(data));
      dispatch(updateDashboardsData({
        pending: false
      }));
    },
    onError: (error) => {
      console.log('error', error);
      // onError && onError(error);
    }
  });
});

export const addCategory = ({ dashboard, color, name, hidden, position, onError, onSuccess }) => ((dispatch) => {
  fetcher({
    url: `/dashboard/${dashboard}/categories`,
    method: 'POST',
    params: {
      color,
      name,
      dashboard,
      position: 50
    },
    onSuccess: ({ id }) => {
      dispatch({
        type: ADD_CATEGORY,
        color,
        name,
        dashboard,
        id
      })
      onSuccess && onSuccess();
    },
    onError: (error) => {
      // console.log('error', error);
      onError && onError(error);
    }
  });
});

export const editCategory = ({ id, color, name, position, dashboard, onError, onSuccess }) => ((dispatch) => {
  fetcher({
    url: `/categories/${dashboard}`,
    method: 'PUT',
    params: {
      color,
      name,
      position,
      dashboard
    },
    onSuccess: () => {
      dispatch({
        type: EDIT_CATEGORY,
        color,
        name,
        dashboard,
        position,
        id
      })
      onSuccess && onSuccess();
    },
    onError: (error) => {
      // console.log('error', error);
      onError && onError(error);
    }
  });
});
