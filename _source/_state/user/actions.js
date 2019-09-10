import fetcher from '../../_utils/fetcher';

export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_SETTINGS = 'UPDATE_SETTINGS';
export const RESET_USER_STATE = 'RESET_USER_STATE';

export const updateUser = (userData) => ({
  type: UPDATE_USER,
  userData
});

export const updateSettings = (userSettings) => ({
  type: UPDATE_SETTINGS,
  userSettings
});

export const resetUserState = () => ({
  type: RESET_USER_STATE
});

export const login = ({ params, onSuccess, onError }) => ((dispatch) => {
  fetcher({
    url: '/login',
    method: 'POST',
    params,
    onSuccess: (data) => {
      const { settings, ...userData } = data;

      dispatch(updateUser({
        loggedIn: true,
        ...userData
      }));
      dispatch(updateSettings(settings));

      onSuccess && onSuccess(data);
    },
    onError: (error) => {
      onError && onError(error);
    }
  });
});

export const logout = ({ onSuccess, onError }) => ((dispatch) => {
  fetcher({
    url: '/logout',
    onSuccess: () => {
      dispatch(resetUserState());

      onSuccess && onSuccess();
    },
    onError: (error) => {
      onError && onError(error);
    }
  });
});

export const join = ({ params, onSuccess, onError }) => ((dispatch) => {
  fetcher({
    url: '/join',
    method: 'POST',
    params,
    onSuccess: (data) => {
      const { settings, ...userData } = data;

      dispatch(updateUser({
        ...userData
      }));
      dispatch(updateSettings(settings));

      onSuccess && onSuccess(data);
    },
    onError: (error) => {
      onError && onError(error);
    }
  });
});

export const deleteAccount = () => ((dispatch) => {
  fetcher({
    url: '/user',
    method: 'DELETE',
    onSuccess: () => {
      dispatch(updateUser({
        loggedIn: false
      }));
    },
    onError: () => {
      // console.log('onError', error);
    }
  });
});
