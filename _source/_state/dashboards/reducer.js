import {
  ADD_DASHBOARD,
  EDIT_DASHBOARD,
  DELETE_DASHBOARD,
  CHANGE_DASHBOARD,
  UPDATE_OFFSET,
  DRAG_DASHBOARD,
  DRAG_CATEGORY,
  TOGGLE_DASHBOARD_OPEN,
  SET_DASHBOARDS
} from './actions';
import { arrayMove } from '../../_utils/array';

const dashboards = (state = {}, action) => {

  switch (action.type) {
    case ADD_DASHBOARD:
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: 123456789,
            name: action.payload.name,
            categories: []
          }
        ],
        active: state.items.length ? state.active : 123456789
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
      let activeId = state.active;

      newDashboards.map((dashboard, index) => {
        if (dashboard.id === id) {
          newDashboards.splice(index, 1);
          activeId = newId || (newDashboards.length ? newDashboards[0].id : null);
        }
      });

      return {
        ...state,
        active: activeId,
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

    case DRAG_DASHBOARD: {
      const { destinationIndex, sourceIndex } = action.data;
      const items = [...state.items];

      arrayMove(items, sourceIndex, destinationIndex);

      return {
        ...state,
        items: items
      };
    }

    case DRAG_CATEGORY: {
      const { destinationIndex, sourceIndex, sourceDashboardId, destinationDashboardId } = action.data;

      return {
        ...state,
        items: state.items.map((dashboard) => {
          const newCategories = [...dashboard.categories];

          if (dashboard.id === sourceDashboardId) {

            // Same dashboard - move category
            if (dashboard.id === destinationDashboardId) {
              arrayMove(newCategories, sourceIndex, destinationIndex);
            // Different dashboard - remove category
            } else {
              newCategories.splice(sourceIndex, 1);
            }

            return {
              ...dashboard,
              categories: [...newCategories]
            };
          // Insert category in new dashboard
          } else if (dashboard.id === destinationDashboardId) {
            const category = state.items.find((item) => item.id === sourceDashboardId).categories[sourceIndex];
            
            newCategories.splice(destinationIndex, 0, category);

            return {
              ...dashboard,
              categories: [...newCategories]
            };
          }

          return dashboard;
        })
      };
    }

    case TOGGLE_DASHBOARD_OPEN:
      return {
        ...state,
        open: !state.open
      };

    case SET_DASHBOARDS:
      return {
        ...state,
        active: action.items[0].id,
        items: action.items
      };

    default:
      return state;
  }
};

export default dashboards;
