import { TOGGLE_SIDEBAR, CLOSE_SIDEBAR } from './actions';

const sidebar = (state = {}, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        open: !state.open
      };

    case CLOSE_SIDEBAR:
      return {
        ...state,
        open: false
      };

    default:
      return state;
  }
};

export default sidebar;
