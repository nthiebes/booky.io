import initialState from '../../initialState';

const user = (state = {}, action) => {
  const { type, userData, userSettings } = action;

  switch (type) {
    case 'UPDATE_USER':
      return {
        ...state,
        ...userData,
        settings: {
          ...state.settings,
          ...userData.settings
        }
      };

    case 'UPDATE_SETTINGS':
      return {
        ...state,
        settings: {
          ...state.settings,
          ...userSettings
        }
      };

    case 'RESET_USER_STATE':
      return initialState.user;

    default:
      return state;
  }
};

export default user;
