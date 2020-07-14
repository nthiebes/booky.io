import fetcher from '../../_utils/fetcher';
import { updateDashboardsData } from '../dashboards/actions';
import { getBookmarks, setBookmarks } from '../bookmarks/actions';

export const setCategories = (categories) => ({
  type: 'SET_CATEGORIES',
  categories
});

export const getCategories = (id) => ((dispatch) => {
  fetcher({
    url: `/dashboards/${id}/categories`,
    onSuccess: (data) => {
      dispatch(setCategories(data));
      dispatch(updateDashboardsData({
        pending: false,
        error: null
      }));
    },
    onError: (error) => {
      dispatch(updateDashboardsData({
        error,
        pending: false
      }));
    }
  });
});

export const addCategory = ({ dashboardId, color, name, position, onError, onSuccess }) => ((dispatch) => {
  fetcher({
    url: `/dashboards/${dashboardId}/categories`,
    method: 'POST',
    params: {
      color,
      name,
      position
    },
    onSuccess: ({ id }) => {
      dispatch({
        type: 'ADD_CATEGORY',
        color,
        name,
        position,
        id,
        dashboardId
      });
      onSuccess && onSuccess();
    },
    onError: (error) => {
      // console.log('error', error);
      onError && onError(error);
    }
  });
});

export const editCategory = ({ id, color, name, hidden, position, dashboardId, onError, onSuccess }) => ((dispatch) => {
  fetcher({
    url: `/categories/${id}`,
    method: 'PATCH',
    params: {
      color,
      name,
      dashboardId,
      hidden,
      position
    },
    onSuccess: () => {
      dispatch({
        type: 'EDIT_CATEGORY',
        color,
        name,
        dashboardId,
        id,
        hidden,
        position
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
    type: 'EDIT_CATEGORY',
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
  const url = newId ? `/categories/${id}?moveBookmarksTo=${newId}` : `/categories/${id}`;

  fetcher({
    url,
    method: 'DELETE',
    params: {
      id
    },
    onSuccess: () => {
      dispatch({
        type: 'DELETE_CATEGORY',
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
