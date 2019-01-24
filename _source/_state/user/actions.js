export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_SETTINGS = 'UPDATE_SETTINGS';

export function updateUser(userData) {
  return {
    type: UPDATE_USER,
    userData
  };
}

export function updateSettings(userSettings) {
  return {
    type: UPDATE_SETTINGS,
    userSettings
  };
}
