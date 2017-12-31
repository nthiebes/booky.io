export const CHANGE_DASHBOARD = 'CHANGE_DASHBOARD';
export const ADD_DASHBOARD = 'ADD_DASHBOARD';
export const EDIT_DASHBOARD = 'EDIT_DASHBOARD';
export const DELETE_DASHBOARD = 'DELETE_DASHBOARD';
export const UPDATE_OFFSET = 'UPDATE_OFFSET';
export const DRAG_DASHBOARD = 'DRAG_DASHBOARD';
export const DRAG_CATEGORY = 'DRAG_CATEGORY';

export function changeDashboard(id) {
  return {
    type: CHANGE_DASHBOARD,
    id
  };
}

export function editDashboard(payload) {
  return {
    type: EDIT_DASHBOARD,
    payload
  };
}

export function deleteDashboard(payload) {
  return {
    type: DELETE_DASHBOARD,
    payload
  };
}

export function addDashboard(payload) {
  return {
    type: ADD_DASHBOARD,
    payload
  };
}

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
