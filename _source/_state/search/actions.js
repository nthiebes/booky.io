import fetcher, { abortFetch } from '../../_utils/fetcher';

export const resetSearch = () => ({
  type: 'RESET_SEARCH'
});

export const updateSearchData = (data) => ({
  type: 'UPDATE_SEARCH_DATA',
  data
});

export const searchBookmarks = (keyword, { limit = 30, offset = 0 } = {}) => ((dispatch) => {
  dispatch(updateSearchData({
    pending: true,
    error: null,
    offset,
    keyword
  }));
  abortFetch();

  fetcher({
    url: `/bookmarks/search?searchTerm=${keyword}&limit=${limit}&offset=${offset}`,
    onSuccess: (results) => {
      dispatch(updateSearchData({
        ...results,
        pending: false
      }));
    },
    onError: (error) => {
      dispatch(updateSearchData({
        error,
        pending: false
      }));
    }
  });
});
