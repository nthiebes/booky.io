const header = (state = {}, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        ...state,
        modal: action.modal,
        open: true,
        showModal: true,
        data: action.data || {}
      };

    case 'CLOSE_MODAL':
      return {
        ...state,
        open: false
      };
    
    case 'HIDE_MODAL':
      return {
        ...state,
        showModal: Boolean(state.open)
      };

    default:
      return state;
  }
};

export default header;
