import fetcher, { abortFetch } from '../../_utils/fetcher';
import initialState from '../../initialState';

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
  abortFetch();

  fetcher({
    url: `/bookmarks/search?searchTerm=${keyword}&limit=${initialState.search.limit}&offset=0`,
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

export const loadMoreBookmarks = (
  keyword,
  { limit = initialState.search.limit, offset = 0 } = {}
) => ((dispatch) => {
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
