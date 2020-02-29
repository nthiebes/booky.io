import initialState from '../../initialState';

const search = (state = {}, action) => {
  const { type, data } = action;

  switch (type) {
    case 'UPDATE_SEARCH_DATA': {
      return {
        ...state,
        ...data
      };
    }

    case 'RESET_SEARCH': {
      return {
        ...initialState.search
      };
    }

    default:
      return state;
  }
};

export default search;
