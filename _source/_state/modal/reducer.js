import { OPEN_MODAL, CLOSE_MODAL } from './actions';

const header = (state = {}, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        modal: action.modal,
        open: true,
        data: action.data || {}
      };

    case CLOSE_MODAL:
      return {
        ...state,
        open: false
      };

    default:
      return state;
  }
};

export default header;
