import fetcher, { abortFetch } from '../../_utils/fetcher';
import { encodeEmoji, decodeEmoji } from '../../_utils/string';
import { removeEmpty } from '../../_utils/object';

import { setCategories, getCategories } from '../categories/actions';
import { updateSettings } from '../user/actions';
import { closeSidebar } from '../sidebar/actions';
import { resetSearch } from '../search/actions';

export const updateOffset = (offset) => ({
  type: 'UPDATE_OFFSET',
  offset
});

export const toggleDashboardOpen = () => ({
  type: 'TOGGLE_DASHBOARD_OPEN'
});

export const updateDashboardsData = (data) => ({
  type: 'UPDATE_DASHBOARDS_DATA',
  data
});

export const changeDashboard = (id) => (dispatch) => {
  dispatch(
    updateDashboardsData({
      pending: true
    })
  );
  abortFetch();
  dispatch(
    updateSettings({
      defaultDashboardId: id
    })
  );

  dispatch(closeSidebar());
  dispatch(getCategories(id));
  dispatch(resetSearch());
};

export const getDashboards = (noReset) => (dispatch) => {
  dispatch(
    updateDashboardsData({
      pending: true
    })
  );
  !noReset && dispatch(resetSearch());

  fetcher({
    url: '/dashboards',
    onSuccess: ({ dashboards, activeCategories }) => {
      dispatch(
        updateDashboardsData({
          items: dashboards.map((dashboard) => ({
            ...dashboard,
            name: decodeEmoji(dashboard.name)
          })),
          pending: false
        })
      );
      dispatch(
        setCategories(
          activeCategories.map((category) => ({
            ...category,
            name: decodeEmoji(category.name),
            pending: true
          }))
        )
      );
    },
    onError: (error) => {
      dispatch(
        updateDashboardsData({
          error,
          pending: false
        })
      );
    }
  });
};

export const addDashboard =
  ({ name, onSuccess, onError }) =>
  (dispatch) => {
    fetcher({
      url: '/dashboards',
      method: 'POST',
      params: {
        name: encodeEmoji(name)
      },
      onSuccess: ({ id }) => {
        dispatch({
          type: 'ADD_DASHBOARD',
          name,
          id
        });
        onSuccess();
      },
      onError: () => {
        onError();
      }
    });
  };

export const editDashboard =
  ({ name, position, id, onSuccess, onError, shouldUpdate = true }) =>
  (dispatch) => {
    fetcher({
      url: `/dashboards/${id}`,
      method: 'PATCH',
      params: removeEmpty({
        name: name ? encodeEmoji(name) : '',
        position
      }),
      onSuccess: () => {
        if (shouldUpdate) {
          dispatch({
            type: 'EDIT_DASHBOARD',
            name,
            id
          });
        }
        onSuccess && onSuccess();
      },
      onError: () => {
        onError && onError();
      }
    });
  };

export const shareDashboard =
  ({ id, isPublic, onSuccess, onError }) =>
  (dispatch) => {
    fetcher({
      url: `/dashboards/${id}`,
      method: 'PATCH',
      params: {
        public: isPublic
      },
      onSuccess: () => {
        dispatch({
          type: 'SHARE_DASHBOARD',
          isPublic,
          id
        });
        onSuccess && onSuccess();
      },
      onError: (error) => {
        onError && onError(error);
      }
    });
  };

export const deleteDashboard =
  ({ id, newId, onSuccess, onError }) =>
  (dispatch, getState) => {
    const dashboards = getState().dashboards.items;
    const activeDashboardId = getState().user.settings.defaultDashboardId;
    const defaultDashboardId =
      newId || (dashboards.length ? dashboards[0].id : null);
    const url = newId
      ? `/dashboards/${id}?moveCategoriesTo=${newId}`
      : `/dashboards/${id}`;

    fetcher({
      url,
      method: 'DELETE',
      onSuccess: () => {
        // The order is important since in the onSuccess callback "abortFetch" is called
        onSuccess();

        dispatch({
          type: 'DELETE_DASHBOARD',
          newId,
          id
        });
        if (activeDashboardId === id) {
          dispatch(changeDashboard(defaultDashboardId));
        }
      },
      onError: () => {
        onError();
      }
    });
  };

export const dragDashboard = (dragData) => (dispatch) => {
  const { destinationIndex, dashboardId } = dragData;

  dispatch({
    type: 'DRAG_DASHBOARD',
    dragData
  });

  dispatch(
    editDashboard({
      id: dashboardId,
      position: destinationIndex + 1,
      shouldUpdate: false
    })
  );
};

export const getDashboard = (id) => (dispatch) => {
  dispatch(
    updateDashboardsData({
      pending: true
    })
  );

  fetcher({
    url: `/dashboards/${id}/shared`,
    onSuccess: ({ name, activeCategories }) => {
      dispatch(
        updateDashboardsData({
          items: [
            {
              name: decodeEmoji(name)
            }
          ],
          pending: false
        })
      );
      dispatch(
        setCategories(
          activeCategories.map((category) => ({
            ...category,
            name: decodeEmoji(category.name),
            pending: true
          }))
        )
      );
    },
    onError: (error) => {
      dispatch(
        updateDashboardsData({
          error,
          pending: false
        })
      );
    }
  });
};
