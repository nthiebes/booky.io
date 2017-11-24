import { TOGGLE_MENU, CLOSE_MENU, TOGGLE_DASHBOARDS, CLOSE_DASHBOARDS } from './actions';

const header = (state = {}, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return Object.assign({}, state, {
        'menuOpen': !state.menuOpen
      });

    case CLOSE_MENU:
      return Object.assign({}, state, {
        'menuOpen': false
      });

    case TOGGLE_DASHBOARDS:
      return Object.assign({}, state, {
        'dashboardsOpen': !state.dashboardsOpen
      });

    case CLOSE_DASHBOARDS:
      return Object.assign({}, state, {
        'dashboardsOpen': false
      });

    default:
      return state;
  }
};

export default header;
