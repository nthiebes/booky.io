import initialState from '../../initialState';

const search = (state = {}, action) => {
  const { type, data } = action;

  switch (type) {
    case 'UPDATE_SEARCH_DATA': {
      if (data.dashboards) {
        return {
          ...state,
          ...data,
          dashboards: [...state.dashboards, ...data.dashboards]
        };
      }
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
