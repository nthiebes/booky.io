import { UPDATE_USER, UPDATE_SETTINGS } from './actions';

const user = (state = {}, action) => {
  const { type, userData, userSettings } = action;

  switch (type) {
    case UPDATE_USER:
      return {
        ...state,
        ...userData,
        settings: {
          ...state.settings,
          ...userData.settings
        }
      };

    case UPDATE_SETTINGS:
      return {
        ...state,
        settings: {
          ...state.settings,
          ...userSettings
        }
      };

    default:
      return state;
  }
};

export default user;
