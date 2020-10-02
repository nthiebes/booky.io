import { UPDATE_EXTENSION_DATA } from './actions';

const extension = (state = {}, action) => {
  const { type, page } = action;

  switch (type) {
    case UPDATE_EXTENSION_DATA:
      return {
        ...state,
        ...page
      };

    default:
      return state;
  }
};

export default extension;
