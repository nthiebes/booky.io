import fetcher, { abortFetch } from '../../_utils/fetcher';

export const resetSearch = () => ({
  type: 'RESET_SEARCH'
});

export const updateSearchData = (data) => ({
  type: 'UPDATE_SEARCH_DATA',
  data
});

export const appendSearchResults = (data) => ({
  type: 'APPEND_SEARCH_RESULTS',
  data
});

export const searchBookmarks = (keyword) => ((dispatch) => {
  dispatch(updateSearchData({
    pending: true,
    error: null,
    offset: 0,
    keyword
  }));
  abortFetch();

  fetcher({
    url: `/bookmarks/search?searchTerm=${keyword}&limit=30&offset=0`,
    onSuccess: ({ dashboards, total }) => {
      dispatch(updateSearchData({
        dashboards,
        total,
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

export const loadMoreBookmarks = (keyword, { limit = 30, offset = 0 } = {}) => ((dispatch) => {
  dispatch(updateSearchData({
    pending: true,
    offset
  }));
  abortFetch();

  fetcher({
    url: `/bookmarks/search?searchTerm=${keyword}&limit=${limit}&offset=${offset}`,
    onSuccess: ({ dashboards, total }) => {
      dispatch(appendSearchResults({
        dashboards,
        total,
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
