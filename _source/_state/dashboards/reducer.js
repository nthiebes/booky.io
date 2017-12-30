import {
  ADD_DASHBOARD,
  EDIT_DASHBOARD,
  DELETE_DASHBOARD,
  CHANGE_DASHBOARD,
  UPDATE_OFFSET,
  TOGGLE_STRUCTURE_VIEW
} from './actions';

const dashboards = (state = {}, action) => {

  switch (action.type) {
    case ADD_DASHBOARD:
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: 123456789,
            name: action.payload.name
          }
        ]
      };

    case EDIT_DASHBOARD: {
      const { name, id } = action.payload;

      return {
        ...state,
        items: state.items.map((dashboard) => {
          if (dashboard.id !== id) {
            return dashboard;
          }
          
          return {
            ...dashboard,
            name
          };
        })
      };
    }

    case DELETE_DASHBOARD: {
      const { id, newId } = action.payload;
      const newDashboards = state.items.slice();
      
      newDashboards.map((dashboard, index) => {
        if (dashboard.id === id) {
          newDashboards.splice(index, 1);
        }
      });

      return {
        ...state,
        items: newDashboards
      };
    }

    case CHANGE_DASHBOARD:
      return {
        ...state,
        active: action.id
      };

    case UPDATE_OFFSET:
      return {
        ...state,
        offset: action.offset
      };

    case TOGGLE_STRUCTURE_VIEW:
      return {
        ...state,
        structureOpen: !state.structureOpen
      };

    default:
      return state;
  }
};

export default dashboards;
