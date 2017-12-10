import { CHANGE_DASHBOARD, UPDATE_OFFSET, TOGGLE_STRUCTURE_VIEW } from './actions';

const dashboards = (state = {}, action) => {

  switch (action.type) {
    case CHANGE_DASHBOARD:
      return Object.assign({}, state, {
        active: action.id
      });

    case UPDATE_OFFSET:
      return Object.assign({}, state, {
        offset: action.offset
      });

    case TOGGLE_STRUCTURE_VIEW:
      return Object.assign({}, state, {
        structureOpen: !state.structureOpen
      });

    default:
      return state;
  }
};

export default dashboards;
