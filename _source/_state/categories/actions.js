import fetcher from '../../_utils/fetcher';
import { encodeEmoji, decodeEmoji } from '../../_utils/string';
import { removeEmpty } from '../../_utils/object';
import { updateDashboardsData } from '../dashboards/actions';
import { getBookmarks, setBookmarks } from '../bookmarks/actions';

export const setCategories = (categories) => ({
  type: 'SET_CATEGORIES',
  categories
});

export const getCategories = (id) => (dispatch) => {
  fetcher({
    url: `/dashboards/${id}/categories`,
    onSuccess: (data) => {
      dispatch(
        setCategories(
          data.map((category) => ({
            ...category,
            name: decodeEmoji(category.name),
            pending: true
          }))
        )
      );
      dispatch(
        updateDashboardsData({
          pending: false,
          error: null
        })
      );
    },
    onError: (error) => {
      dispatch(
        updateDashboardsData({
          error,
          pending: false
        })
      );
    }
  });
};

export const addCategory = ({
  dashboardId,
  color,
  name,
  position,
  onError,
  onSuccess,
  shouldUpdate = true
}) => (dispatch) => {
  fetcher({
    url: `/dashboards/${dashboardId}/categories`,
    method: 'POST',
    params: {
      color,
      name: encodeEmoji(name),
      position
    },
    onSuccess: ({ id }) => {
      if (shouldUpdate) {
        dispatch({
          type: 'ADD_CATEGORY',
          color,
          name,
          position,
          id,
          dashboardId
        });
      }
      onSuccess && onSuccess(id);
    },
    onError: (error) => {
      onError && onError(error);
    }
  });
};

export const editCategory = ({
  id,
  color,
  name,
  hidden,
  position,
  dashboardId,
  onError,
  onSuccess
}) => (dispatch) => {
  fetcher({
    url: `/categories/${id}`,
    method: 'PATCH',
    params: removeEmpty({
      color,
      name: name ? encodeEmoji(name) : '',
      dashboardId,
      hidden,
      position
    }),
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
};

export const toggleCategory = ({ id, hidden }) => (dispatch) => {
  dispatch({
    type: 'EDIT_CATEGORY',
    id,
    hidden
  });
  if (hidden) {
    dispatch(
      setBookmarks({
        id,
        bookmarks: []
      })
    );
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
};

export const deleteCategory = ({ id, newId, onError, onSuccess }) => (
  dispatch
) => {
  const url = newId
    ? `/categories/${id}?moveBookmarksTo=${newId}`
    : `/categories/${id}`;

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
};
