export const CHANGE_DASHBOARD = 'CHANGE_DASHBOARD';
export const EDIT_DASHBOARD = 'EDIT_DASHBOARD';
export const DELETE_DASHBOARD = 'DELETE_DASHBOARD';
export const ADD_DASHBOARD = 'ADD_DASHBOARD';
export const UPDATE_OFFSET = 'UPDATE_OFFSET';
export const TOGGLE_STRUCTURE_VIEW = 'TOGGLE_STRUCTURE_VIEW';

export function changeDashboard(id) {
  return {
    'type': CHANGE_DASHBOARD,
    id
  };
}

export function editDashboard(data) {
  return {
    'type': EDIT_DASHBOARD,
    'id': data.id,
    'name': data.name,
    'position': data.position
  };
}

export function deleteDashboard(id) {
  return {
    'type': DELETE_DASHBOARD,
    id
  };
}

export function addDashboard(name) {
  return {
    'type': ADD_DASHBOARD,
    name
  };
}

export function updateOffset(offset) {
  return {
    'type': UPDATE_OFFSET,
    offset
  };
}

export function toggleStructureView() {
  return {
    type: TOGGLE_STRUCTURE_VIEW
  };
}
