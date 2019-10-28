import { arrayMove } from '../../_utils/array';

// eslint-disable-next-line max-statements
const dashboards = (state = {}, action) => {
  const { name, id, type } = action;

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
      const { destinationIndex, sourceIndex } = action.data;
      const items = [...state.items];

      arrayMove(items, sourceIndex, destinationIndex);

      return {
        ...state,
        items: items
      };
    }

    case 'DRAG_CATEGORY': {
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

    default:
      return state;
  }
};

export default dashboards;
