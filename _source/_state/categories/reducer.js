import { ADD_CATEGORY, TOGGLE_CATEGORY, ADD_BOOKMARK } from './actions';
import { arrayMove } from '../../_utils/array';

const categories = (state = [], action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          expanded: true
        }
      ];

    case TOGGLE_CATEGORY:
      return state.map((category) => {
        if (category.id === action.id) {
          return Object.assign({}, category, {
            expanded: !category.expanded
          });
        }
        return category;
      });

    case ADD_BOOKMARK: {
      const { destinationIndex, destinationCategoryId, sourceIndex, sourceCategoryId } = action.data;

      return state.map((category) => {
        const bookmarks = Object.assign([], category.bookmarks);
        
        if (category.id === sourceCategoryId) {

          if (category.id === destinationCategoryId) {
            arrayMove(bookmarks, sourceIndex, destinationIndex);
          } else {
            bookmarks.splice(sourceIndex, 1);
          }

          return Object.assign({}, category, {
            bookmarks: Object.assign([], bookmarks)
          });
        } else if (category.id === destinationCategoryId) {
          const bookmark = state[sourceCategoryId].bookmarks[sourceIndex];
          
          bookmarks.splice(destinationIndex, 0, bookmark);

          return Object.assign({}, category, {
            bookmarks: Object.assign([], bookmarks)
          });
        }

        return category;
      });
    }
      
    default:
      return state;
  }
};

export default categories;
