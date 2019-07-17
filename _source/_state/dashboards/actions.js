import fetcher from '../../_utils/fetcher';

import { setCategories, getCategories } from '../categories/actions';
import { closeSidebar } from '../sidebar/actions';

export const CHANGE_DASHBOARD = 'CHANGE_DASHBOARD';
export const ADD_DASHBOARD = 'ADD_DASHBOARD';
export const EDIT_DASHBOARD = 'EDIT_DASHBOARD';
export const DELETE_DASHBOARD = 'DELETE_DASHBOARD';
export const UPDATE_OFFSET = 'UPDATE_OFFSET';
export const DRAG_DASHBOARD = 'DRAG_DASHBOARD';
export const DRAG_CATEGORY = 'DRAG_CATEGORY';
export const TOGGLE_DASHBOARD_OPEN = 'TOGGLE_DASHBOARD_OPEN';
export const UPDATE_DASHBOARDS_DATA = 'UPDATE_DASHBOARDS_DATA';

export function updateOffset(offset) {
  return {
    type: UPDATE_OFFSET,
    offset
  };
}

export function dragDashboard(data) {
  return {
    type: DRAG_DASHBOARD,
    data
  };
}

export function dragCategory(data) {
  return {
    type: DRAG_CATEGORY,
    data
  };
}

export function toggleDashboardOpen() {
  return {
    type: TOGGLE_DASHBOARD_OPEN
  };
}

export const updateDashboardsData = (data) => ({
  type: UPDATE_DASHBOARDS_DATA,
  data
});

export const changeDashboard = (id) => ((dispatch) => {
  dispatch(updateDashboardsData({
    pending: true,
    active: id
  }));

  dispatch(closeSidebar());
  dispatch(getCategories(id));
});

export const getDashboards = () => ((dispatch) => {
  dispatch(updateDashboardsData({
    pending: true
  }));

  fetcher({
    url: '/dashboards',
    onSuccess: ({ dashboards, activeCategories }) => {
      dispatch(updateDashboardsData({
        items: dashboards,
        active: dashboards[0].id,
        pending: false
      }));
      dispatch(setCategories(activeCategories));
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
      name
    },
    onSuccess: ({ id }) => {
      dispatch({
        type: ADD_DASHBOARD,
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

export const editDashboard = ({ name, id, onSuccess, onError }) => ((dispatch) => {
  fetcher({
    url: `/dashboards/${id}`,
    method: 'PUT',
    params: {
      name
    },
    onSuccess: () => {
      dispatch({
        type: EDIT_DASHBOARD,
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

export const deleteDashboard = ({ id, newId, onSuccess, onError }) => ((dispatch) => {
  fetcher({
    url: `/dashboards/${id}`,
    method: 'DELETE',
    onSuccess: () => {
      dispatch({
        type: DELETE_DASHBOARD,
        newId,
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
