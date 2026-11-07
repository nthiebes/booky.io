export const USER_STATES = {
  LOGGED_IN: 'loggedIn',
  LOGGED_OUT: 'loggedOut',
  UNAVAILABLE: 'unavailable'
};

const MAX_ATTEMPTS = 3;
const RETRY_DELAY = 1000;

// Only a 401 means that the user is logged out. Anything else (server error, timeout,
// network problem) says nothing about the session, so the user must not look logged out.
const loadUser = (fetcher, attempt = 1) =>
  new Promise((resolve) => {
    fetcher({
      url: '/user',
      onSuccess: (data) => resolve({ state: USER_STATES.LOGGED_IN, data }),
      onError: (error) => {
        if (error === 'error.unauthorized') {
          resolve({ state: USER_STATES.LOGGED_OUT });
        } else if (attempt < MAX_ATTEMPTS) {
          setTimeout(
            () => loadUser(fetcher, attempt + 1).then(resolve),
            attempt * RETRY_DELAY
          );
        } else {
          resolve({ state: USER_STATES.UNAVAILABLE });
        }
      }
    });
  });

export default loadUser;
