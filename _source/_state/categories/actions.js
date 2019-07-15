import fetcher from '../../_utils/fetcher';
import { updateDashboardsData } from '../dashboards/actions';
import { getBookmarks, setBookmarks, setBookmarksPending } from '../bookmarks/actions';

export const ADD_CATEGORY = 'ADD_CATEGORY';
export const EDIT_CATEGORY = 'EDIT_CATEGORY';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';
export const SET_CATEGORIES = 'SET_CATEGORIES';

export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  categories
});

export const getCategories = (id) => ((dispatch) => {
  fetcher({
    url: `/dashboards/${id}/categories`,
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
  if (hidden) {
    dispatch(setBookmarks({
      id,
      bookmarks: []
    }));
  } else {
    dispatch(getBookmarks(id));
    dispatch(setBookmarksPending({
      id,
      pending: true
    }));
  }

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
