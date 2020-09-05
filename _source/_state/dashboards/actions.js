import fetcher, { abortFetch } from '../../_utils/fetcher';
import { encodeEmoji, decodeEmoji } from '../../_utils/string';

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

export const changeDashboard = (id) => ((dispatch) => {
  dispatch(updateDashboardsData({
    pending: true
  }));
  abortFetch();
  dispatch(updateSettings({
    defaultDashboardId: id
  }));

  dispatch(closeSidebar());
  dispatch(getCategories(id));
  dispatch(resetSearch());
});

export const getDashboards = () => ((dispatch) => {
  dispatch(updateDashboardsData({
    pending: true
  }));
  dispatch(resetSearch());

  fetcher({
    url: '/dashboards',
    onSuccess: ({ dashboards, activeCategories }) => {
      dispatch(updateDashboardsData({
        items: dashboards.map((dashboard) => ({
          ...dashboard,
          name: decodeEmoji(dashboard.name)
        })),
        pending: false
      }));
      dispatch(setCategories(activeCategories.map((category) => ({
        ...category,
        name: decodeEmoji(category.name)
      }))));
    },
    onError: (error) => {
      dispatch(updateDashboardsData({
        error,
        pending: false
      }));
    }
  });
});

export const addDashboard = ({ name, onSuccess, onError }) => ((dispatch) => {
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
      // console.log('error', error);
      onError();
    }
  });
});

export const editDashboard = ({ name, position, id, onSuccess, onError, shouldUpdate = true }) => ((dispatch) => {
  fetcher({
    url: `/dashboards/${id}`,
    method: 'PATCH',
    params: {
      name: encodeEmoji(name),
      position
    },
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
      // console.log('error', error);
      onError && onError();
    }
  });
});

export const deleteDashboard = ({ id, newId, onSuccess, onError }) => ((dispatch, getState) => {
  const dashboards = getState().dashboards.items;
  const activeDashboardId = getState().user.settings.defaultDashboardId;
  const defaultDashboardId = newId || (dashboards.length ? dashboards[0].id : null);
  const url = newId ? `/dashboards/${id}?moveCategoriesTo=${newId}` : `/dashboards/${id}`;

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
});

export const dragDashboard = (dragData) => ((dispatch) => {
  const { destinationIndex, dashboardId } = dragData;

  dispatch({
    type: 'DRAG_DASHBOARD',
    dragData
  });

  dispatch(editDashboard({
    id: dashboardId,
    position: destinationIndex + 1,
    shouldUpdate: false
  }));
});
