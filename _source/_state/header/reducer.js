import { TOGGLE_MAIN_MENU, CLOSE_MAIN_MENU, TOGGLE_DASHBOARDS, CLOSE_DASHBOARDS } from './actions';

const header = (state = {}, action) => {
  switch (action.type) {
    case TOGGLE_MAIN_MENU:
      return Object.assign({}, state, {
        'menuMainOpen': !state.menuMainOpen
      });

    case CLOSE_MAIN_MENU:
      return Object.assign({}, state, {
        'menuMainOpen': false
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
