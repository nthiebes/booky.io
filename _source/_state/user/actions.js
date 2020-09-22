import fetcher from '../../_utils/fetcher';
import { removeEmpty } from '../../_utils/object';

export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_SETTINGS = 'UPDATE_SETTINGS';
export const RESET_USER_STATE = 'RESET_USER_STATE';

export const resetUserState = () => ({
  type: RESET_USER_STATE
});

export const updateUserData = (userData) => ((dispatch) => {
  dispatch({
    type: UPDATE_USER,
    userData
  });
});

export const updateUser = ({userData, onError, onSuccess}) => ((dispatch) => {
  dispatch({
    type: UPDATE_USER,
    userData: {
      username: userData.username
    }
  });

  fetcher({
    url: '/account',
    method: 'PATCH',
    params: removeEmpty(userData),
    onSuccess: (data) => {
      onSuccess && onSuccess(data);
    },
    onError: (error) => {
      onError && onError(error);
    }
  });
});

export const updateSettings = (userSettings, {onSuccess, onError} = {}) => ((dispatch) => {
  dispatch({
    type: UPDATE_SETTINGS,
    userSettings
  });

  fetcher({
    url: '/user/settings',
    method: 'PATCH',
    params: userSettings,
    onSuccess: () => {
      onSuccess && onSuccess();
    },
    onError: (error) => {
      onError && onError(error);
    }
  });
});

export const login = ({ params, onSuccess, onError }) => ((dispatch) => {
  fetcher({
    url: '/login',
    method: 'POST',
    params,
    onSuccess: (data) => {
      const { settings, ...userData } = data;

      dispatch({
        type: UPDATE_USER,
        userData: {
          loggedIn: true,
          ...userData
        }
      });
      dispatch({
        type: UPDATE_SETTINGS,
        userSettings: settings
      });

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

export const join = ({ params, onSuccess, onError }) => (() => {
  fetcher({
    url: '/user/register',
    method: 'POST',
    params,
    onSuccess: (data) => {
      onSuccess && onSuccess(data);
    },
    onError: (error) => {
      onError && onError(error);
    }
  });
});

export const resend = ({ params, onSuccess, onError }) => (() => {
  fetcher({
    url: '/user/activation/resend',
    method: 'POST',
    params,
    onSuccess: (data) => {
      onSuccess && onSuccess(data);
    },
    onError: (error) => {
      onError && onError(error);
    }
  });
});

export const activate = ({ token, onSuccess, onError }) => (() => {
  fetcher({
    url: '/activate',
    method: 'POST',
    params: {
      token
    },
    onSuccess: (data) => {
      onSuccess && onSuccess(data);
    },
    onError: (error) => {
      onError && onError(error);
    }
  });
});

export const forgot = ({ params, onSuccess, onError }) => (() => {
  fetcher({
    url: '/password/recovery/confirmation',
    method: 'POST',
    params,
    onSuccess: (data) => {
      onSuccess && onSuccess(data);
    },
    onError: (error) => {
      onError && onError(error);
    }
  });
});

export const confirm = ({ params, onSuccess, onError }) => (() => {
  fetcher({
    url: '/password/recovery',
    method: 'POST',
    params,
    onSuccess: (data) => {
      onSuccess && onSuccess(data);
    },
    onError: (error) => {
      onError && onError(error);
    }
  });
});

export const deny = ({ params, onSuccess, onError }) => (() => {
  fetcher({
    url: '/password/recovery/deny',
    method: 'POST',
    params,
    onSuccess: (data) => {
      onSuccess && onSuccess(data);
    },
    onError: (error) => {
      onError && onError(error);
    }
  });
});

export const deleteAccount = () => (() => {
  // fetcher({
  //   url: '/user',
  //   method: 'DELETE',
  //   onSuccess: () => {
  //     dispatch(updateUser({
  //       loggedIn: false
  //     }));
  //   },
  //   onError: () => {
  //     // console.log('onError', error);
  //   }
  // });
});
