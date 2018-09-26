import { UPDATE_USER } from './actions';

const user = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        ...action.user
      };

    default:
      return state;
  }
};

export default user;
