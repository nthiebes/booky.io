import initialState from '../../initialState';

const duplicates = (state = {}, action) => {
  const { type, data } = action;

  switch (type) {
    case 'UPDATE_DUPLICATES_DATA': {
      return {
        ...state,
        ...data
      };
    }

    case 'APPEND_DUPLICATES': {
      return {
        ...state,
        ...data,
        groups: [...state.groups, ...data.groups]
      };
    }

    case 'RESET_DUPLICATES': {
      return {
        ...initialState.duplicates
      };
    }

    default:
      return state;
  }
};

export default duplicates;
