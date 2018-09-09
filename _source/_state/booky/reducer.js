import { LOGIN } from './actions';

const booky = (state = [], action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loggedIn: true
      };

    default:
      return state;
  }
};

export default booky;
