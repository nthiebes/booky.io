const search = (state = {}, action) => {
  const { type, keyword } = action;

  switch (type) {
    case 'SET_SEARCH_KEYWORD': {
      return {
        ...state,
        keyword
      };
    }

    default:
      return state;
  }
};

export default search;
