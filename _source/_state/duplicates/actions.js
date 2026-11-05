import fetcher from '../../_utils/fetcher';
import initialState from '../../initialState';
import { decodeSearchDashboards } from '../search/actions';

const updateDuplicatesData = (data) => ({
  type: 'UPDATE_DUPLICATES_DATA',
  data
});

// Responses that arrive after a newer request or a reset are ignored
let latestRequest = 0;

const fetchDuplicates =
  ({ offset, limit, onSuccess }) =>
  (dispatch) => {
    latestRequest += 1;
    const request = latestRequest;

    fetcher({
      url: `/bookmarks/duplicates?offset=${offset}&limit=${limit}`,
      onSuccess: ({ groups, total }) => {
        if (request === latestRequest) {
          onSuccess({
            total,
            pending: false,
            groups: groups.map((group) => ({
              ...group,
              dashboards: decodeSearchDashboards(group.dashboards)
            }))
          });
        }
      },
      onError: (error) => {
        if (request === latestRequest) {
          dispatch(updateDuplicatesData({ error, pending: false }));
        }
      }
    });
  };

export const findDuplicates = () => (dispatch) => {
  dispatch(
    updateDuplicatesData({
      ...initialState.duplicates,
      pending: true
    })
  );
  dispatch(
    fetchDuplicates({
      offset: 0,
      limit: initialState.duplicates.limit,
      onSuccess: (data) => dispatch(updateDuplicatesData(data))
    })
  );
};

export const loadMoreDuplicates = () => (dispatch, getState) => {
  const { groups, limit } = getState().duplicates;

  dispatch(updateDuplicatesData({ pending: true }));
  dispatch(
    fetchDuplicates({
      offset: groups.length,
      limit,
      onSuccess: (data) => dispatch({ type: 'APPEND_DUPLICATES', data })
    })
  );
};

// Keeps the loaded groups on screen, so editing a bookmark doesn't lose the scroll position
export const refreshDuplicates = () => (dispatch, getState) => {
  const { groups, limit } = getState().duplicates;

  dispatch(
    fetchDuplicates({
      offset: 0,
      limit: Math.max(groups.length, limit),
      onSuccess: (data) => dispatch(updateDuplicatesData(data))
    })
  );
};

export const resetDuplicates = () => {
  latestRequest += 1;

  return {
    type: 'RESET_DUPLICATES'
  };
};
