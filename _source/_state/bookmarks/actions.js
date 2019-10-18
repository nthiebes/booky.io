import fetcher from '../../_utils/fetcher';
import { addCategory } from '../categories/actions';

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
        bookmarks,
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

export const editBookmark = ({ categoryId, name, url, onError, onSuccess, id, position }) => ((dispatch) => {
  fetcher({
    url: `/bookmarks/${id}`,
    method: 'PUT',
    params: {
      name,
      url,
      categoryId,
      position
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

export const dragBookmark = (dragData) => ((dispatch) => {
  const { sourceCategoryId, destinationCategoryId, bookmarkId, destinationIndex } = dragData;
  // const bookmarksSameCategory = getState().categories
  //   .find((category) => category.id === sourceCategoryId).bookmarks
  //   .map((bookmark) => bookmark.id);

  dispatch({
    type: 'DRAG_BOOKMARK',
    dragData
  });

  dispatch(editBookmark({
    id: bookmarkId,
    categoryId: sourceCategoryId,
    position: destinationIndex,
    name: 'name',
    url: 'url'
  }));

  // fetcher({
  //   url: `/categories/${sourceCategoryId}/layout`,
  //   method: 'PUT',
  //   params: bookmarksSameCategory,
  //   onSuccess: () => {
  //     // onSuccess && onSuccess();
  //   },
  //   onError: () => {
  //     // console.log('error', error);
  //     // onError && onError(error);
  //   }
  // });

  if (sourceCategoryId !== destinationCategoryId) {
    // const bookmarkToMove = getState().categories
    //   .find((category) => category.id === destinationCategoryId).bookmarks
    //   .find((bookmark) => bookmark.id);
    
    // console.log(bookmarkToMove);

    // addCategory(bookmarkToMove);
  }
});
