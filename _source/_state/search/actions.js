import fetcher, { abortFetch, ABORT_KEYS } from '../../_utils/fetcher';
import { decodeEmoji } from '../../_utils/string';
import initialState from '../../initialState';

export const decodeSearchDashboards = (dashboards) =>
  dashboards.map((dashboard) => ({
    ...dashboard,
    name: decodeEmoji(dashboard.name),
    categories: dashboard.categories.map((category) => ({
      ...category,
      name: decodeEmoji(category.name),
      bookmarks: category.bookmarks.map((bookmark) => ({
        ...bookmark,
        name: decodeEmoji(bookmark.name)
      }))
    }))
  }));

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

export const searchBookmarks =
  ({ keyword, abort = true }) =>
  (dispatch) => {
    abort && abortFetch(ABORT_KEYS.search);

    fetcher({
      url: `/bookmarks/search?searchTerm=${keyword}&limit=${initialState.search.limit}&offset=0`,
      abortKey: ABORT_KEYS.search,
      onSuccess: ({ dashboards, total }) => {
        dispatch(
          updateSearchData({
            dashboards: decodeSearchDashboards(dashboards),
            total,
            pending: false
          })
        );
      },
      onError: (error) => {
        dispatch(
          updateSearchData({
            error,
            pending: false
          })
        );
      }
    });
  };

export const loadMoreBookmarks =
  (keyword, { limit = initialState.search.limit, offset = 0 } = {}) =>
  (dispatch) => {
    dispatch(
      updateSearchData({
        pending: true,
        offset
      })
    );
    abortFetch(ABORT_KEYS.search);

    fetcher({
      url: `/bookmarks/search?searchTerm=${keyword}&limit=${limit}&offset=${offset}`,
      abortKey: ABORT_KEYS.search,
      onSuccess: ({ dashboards, total }) => {
        dispatch(
          appendSearchResults({
            dashboards: decodeSearchDashboards(dashboards),
            total,
            pending: false
          })
        );
      },
      onError: (error) => {
        dispatch(
          updateSearchData({
            error,
            pending: false
          })
        );
      }
    });
  };
