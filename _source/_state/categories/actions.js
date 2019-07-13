import fetcher from '../../_utils/fetcher';
import { updateDashboardsData } from '../dashboards/actions';

export const ADD_BOOKMARK = 'ADD_BOOKMARK';
export const EDIT_BOOKMARK = 'EDIT_BOOKMARK';
export const DELETE_BOOKMARK = 'DELETE_BOOKMARK';
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const EDIT_CATEGORY = 'EDIT_CATEGORY';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';
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

export const addCategory = ({ dashboard, color, name, position, onError, onSuccess }) => ((dispatch) => {
  fetcher({
    url: `/dashboards/${dashboard}/categories`,
    method: 'POST',
    params: {
      color,
      name,
      dashboard,
      position
    },
    onSuccess: ({ id }) => {
      dispatch({
        type: ADD_CATEGORY,
        color,
        name,
        position,
        id
      });
      onSuccess && onSuccess();
    },
    onError: (error) => {
      // console.log('error', error);
      onError && onError(error);
    }
  });
});

export const editCategory = ({ id, color, name, hidden, dashboard, onError, onSuccess }) => ((dispatch) => {
  fetcher({
    url: `/categories/${id}`,
    method: 'PATCH',
    params: {
      color,
      name,
      dashboard,
      hidden
    },
    onSuccess: () => {
      dispatch({
        type: EDIT_CATEGORY,
        color,
        name,
        dashboard,
        id,
        hidden
      });
      onSuccess && onSuccess();
    },
    onError: (error) => {
      // console.log('error', error);
      onError && onError(error);
    }
  });
});

export const toggleCategory = ({ id, hidden }) => ((dispatch) => {
  dispatch({
    type: EDIT_CATEGORY,
    id,
    hidden
  });

  fetcher({
    url: `/categories/${id}`,
    method: 'PATCH',
    params: {
      hidden
    },
    onError: () => {
      // console.log('error', error);
    }
  });
});

export const deleteCategory = ({ id, newId, onError, onSuccess }) => ((dispatch) => {
  fetcher({
    url: `/categories/${id}`,
    method: 'DELETE',
    params: {
      id
    },
    onSuccess: () => {
      dispatch({
        type: DELETE_CATEGORY,
        id,
        newId
      });
      onSuccess && onSuccess();
    },
    onError: (error) => {
      // console.log('error', error);
      onError && onError(error);
    }
  });
});
