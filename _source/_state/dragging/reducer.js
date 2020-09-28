import initialState from '../../initialState';

const dragging = (state = {}, action) => {
  const { type, data } = action;

  switch (type) {
    case 'START_DRAGGING': {
      return {
        ...state,
        ...data,
        isDragging: true
      };
    }

    case 'STOP_DRAGGING': {
      return {
        ...initialState.dragging
      };
    }

    default:
      return state;
  }
};

export default dragging;
