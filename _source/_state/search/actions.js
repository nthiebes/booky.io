import fetcher, { abortFetch } from '../../_utils/fetcher';
import resultsMock from './resultsMock.json';

// const emptyResultsMock = {
//   total: 0,
//   offset: 0,
//   limit: 50,
//   dashboards: []
// };

export const resetSearch = () => ({
  type: 'RESET_SEARCH'
});

export const updateSearchData = (data) => ({
  type: 'UPDATE_SEARCH_DATA',
  data
});

export const searchBookmarks = (keyword) => ((dispatch) => {
  dispatch(updateSearchData({
    pending: true,
    error: null,
    keyword
  }));
  abortFetch();

  fetcher({
    url: '/search',
    onSuccess: ({ results }) => {
      dispatch(updateSearchData({
        results,
        pending: false
      }));
    },
    onError: () => {
      dispatch(updateSearchData({
        results: resultsMock,
        pending: false
      }));
      // dispatch(updateSearchData({
      //   error,
      //   pending: false
      // }));
    }
  });
});
