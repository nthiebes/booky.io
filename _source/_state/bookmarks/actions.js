import fetcher from '../../_utils/fetcher';

export const dragBookmark = (data) => ({
  type: 'DRAG_BOOKMARK',
  data
});

export const setBookmarks = ({bookmarks, id}) => ({
  type: 'SET_BOOKMARKS',
  bookmarks,
  id
});

export const setBookmarksPending = ({pending, id}) => ({
  type: 'SET_BOOKMARKS_PENDING',
  pending,
  id
});

export const getBookmarks = (id) => ((dispatch) => {
  dispatch(setBookmarksPending({
    id,
    pending: true
  }));

  fetcher({
    url: `/categories/${id}/bookmarks`,
    onSuccess: (bookmarks) => {
      dispatch(setBookmarks({
        id,
        bookmarks
      }));
    },
    onError: () => {
      // console.log('error', error);
      // onError && onError(error);
    }
  });
});

export const addBookmark = ({ categoryId, name, url, onError, onSuccess }) => ((dispatch) => {
  fetcher({
    url: `/categories/${categoryId}/bookmarks`,
    method: 'POST',
    params: {
      name,
      url
    },
    onSuccess: ({ id, favicon }) => {
      dispatch({
        type: 'ADD_BOOKMARK',
        categoryId,
        name,
        url,
        id,
        favicon
      });
      onSuccess && onSuccess();
    },
    onError: (error) => {
      // console.log('error', error);
      onError && onError(error);
    }
  });
});

export const editBookmark = ({ categoryId, name, url, onError, onSuccess, id }) => ((dispatch) => {
  fetcher({
    url: `/bookmarks/${id}`,
    method: 'PUT',
    params: {
      name,
      url
    },
    onSuccess: ({ favicon }) => {
      dispatch({
        type: 'EDIT_BOOKMARK',
        name,
        url,
        favicon,
        id,
        categoryId
      });
      onSuccess && onSuccess();
    },
    onError: (error) => {
      // console.log('error', error);
      onError && onError(error);
    }
  });
});

export const deleteBookmark = ({ categoryId, id, onError, onSuccess }) => ((dispatch) => {
  fetcher({
    url: `/bookmarks/${id}`,
    method: 'DELETE',
    onSuccess: () => {
      dispatch({
        type: 'DELETE_BOOKMARK',
        id,
        categoryId
      });
      onSuccess && onSuccess();
    },
    onError: (error) => {
      // console.log('error', error);
      onError && onError(error);
    }
  });
});
