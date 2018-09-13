export const UPDATE_USER = 'UPDATE_USER';

export function updateUser(user) {
  return {
    type: UPDATE_USER,
    user
  };
}
