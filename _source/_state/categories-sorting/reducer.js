import { arrayMove } from '../../_utils/array';

const categoriesSorting = (state = {}, action) => {
  const { type, dragData, data } = action;

  switch (type) {
    case 'UPDATE_CATEGORIES_SORTING': {
      return {
        ...state,
        ...data
      };
    }

    case 'DRAG_CATEGORY': {
      const { destinationIndex, sourceIndex } = dragData;
      const items = [...state.items];

      arrayMove(items, sourceIndex, destinationIndex);

      return {
        ...state,
        items: items
      };
    }

    default:
      return state;
  }
};

export default categoriesSorting;
