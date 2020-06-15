import { arrayMove } from '../../_utils/array';
import initialState from '../../initialState';

// eslint-disable-next-line max-statements
const dashboards = (state = {}, action) => {
  const { name, id, type, dragData } = action;

  switch (type) {
    case 'ADD_DASHBOARD':
      
      return {
        ...state,
        items: [
          ...state.items,
          {
            id,
            name
          }
        ]
      };

    case 'EDIT_DASHBOARD': {
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

    case 'DELETE_DASHBOARD': {
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

    case 'CHANGE_DASHBOARD':
      return {
        ...state,
        active: action.id,
        pending: true
      };

    case 'UPDATE_OFFSET':
      return {
        ...state,
        offset: action.offset
      };

    case 'DRAG_DASHBOARD': {
      const { destinationIndex, sourceIndex } = dragData;
      const items = [...state.items];

      arrayMove(items, sourceIndex, destinationIndex);

      return {
        ...state,
        items: items
      };
    }

    case 'TOGGLE_DASHBOARD_OPEN':
      return {
        ...state,
        open: !state.open
      };

    case 'UPDATE_DASHBOARDS_DATA':
      return {
        ...state,
        ...action.data
      };
    
    case 'RESET_USER_STATE': {
      return initialState.dashboards;
    }

    default:
      return state;
  }
};

export default dashboards;
