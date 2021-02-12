import fetcher, { abortFetch } from '../../_utils/fetcher';
import { decodeEmoji } from '../../_utils/string';
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

export const searchBookmarks = ({ keyword, abort = true }) => (dispatch) => {
  abort && abortFetch();

  fetcher({
    url: `/bookmarks/search?searchTerm=${keyword}&limit=${initialState.search.limit}&offset=0`,
    onSuccess: ({ dashboards, total }) => {
      dispatch(
        updateSearchData({
          dashboards: dashboards.map((dashboard) => ({
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
          })),
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

export const loadMoreBookmarks = (
  keyword,
  { limit = initialState.search.limit, offset = 0 } = {}
) => (dispatch) => {
  dispatch(
    updateSearchData({
      pending: true,
      offset
    })
  );
  abortFetch();

  fetcher({
    url: `/bookmarks/search?searchTerm=${keyword}&limit=${limit}&offset=${offset}`,
    onSuccess: ({ dashboards, total }) => {
      dispatch(
        appendSearchResults({
          dashboards: dashboards.map((dashboard) => ({
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
          })),
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
