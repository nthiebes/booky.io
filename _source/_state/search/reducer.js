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

    case 'APPEND_SEARCH_RESULTS': {
      return {
        ...state,
        ...data,
        dashboards: [...state.dashboards, ...data.dashboards]
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
