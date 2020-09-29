import fetcher from '../../_utils/fetcher';
import { encodeEmoji, decodeEmoji } from '../../_utils/string';
import { removeEmpty } from '../../_utils/object';

export const setBookmarks = ({bookmarks, id, error}) => ({
  type: 'SET_BOOKMARKS',
  bookmarks,
  id,
  error
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
        bookmarks: bookmarks.map((bookmark) => ({
          ...bookmark,
          name: decodeEmoji(bookmark.name)
        })),
        error: null
      }));
    },
    onError: (error) => {
      // console.log(error);
      dispatch(setBookmarks({
        id,
        bookmarks: [],
        error
      }));
    }
  });
});

export const addBookmark = ({ categoryId, name, url, note, onError, onSuccess }) => ((dispatch) => {
  fetcher({
    url: `/categories/${categoryId}/bookmarks`,
    method: 'POST',
    params: {
      name: encodeEmoji(name),
      url,
      note
    },
    onSuccess: ({ id, favicon }) => {
      dispatch({
        type: 'ADD_BOOKMARK',
        categoryId,
        name,
        url,
        id,
        note,
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

export const editBookmark = ({ categoryId, name, url, note, onError, onSuccess, id, position, shouldUpdate = true }) => ((dispatch) => {
  fetcher({
    url: `/bookmarks/${id}`,
    method: 'PATCH',
    params: removeEmpty({
      name: name ? encodeEmoji(name) : '',
      url,
      categoryId,
      position,
      note
    }),
    onSuccess: ({ favicon }) => {
      if (shouldUpdate) {
        dispatch({
          type: 'EDIT_BOOKMARK',
          name,
          url,
          favicon,
          id,
          categoryId,
          note
        });
      }
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

export const dragBookmark = (dragData) => ((dispatch) => {
  const { destinationCategoryId, bookmarkId, destinationIndex } = dragData;

  dispatch({
    type: 'DRAG_BOOKMARK',
    dragData
  });

  dispatch(editBookmark({
    id: bookmarkId,
    categoryId: destinationCategoryId,
    position: destinationIndex + 1,
    shouldUpdate: false
  }));
});

export const getTitle = ({ url, onSuccess, onError }) => (() => {
  fetcher({
    url: `/helpers/page-title/?url=${url}`,
    onSuccess: ({ title }) => { onSuccess(title); },
    onError
  });
});
