import { ADD_CATEGORY, EDIT_CATEGORY, DELETE_CATEGORY, TOGGLE_CATEGORY, DRAG_BOOKMARK } from './actions';
import { arrayMove } from '../../_utils/array';

const categories = (state = [], action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return [
        ...state,
        {
          id: 123456789,
          name: action.payload.name,
          color: action.payload.color,
          dashboard: action.payload.dashboard,
          position: state.length,
          expanded: true
        }
      ];

    case EDIT_CATEGORY:
      return state.map((category, index) => {
        if (state[index].id !== action.payload.id) {
          return category;
        }
        
        return {
          ...category,
          ...action.payload
        };    
      });

    case DELETE_CATEGORY: {
      const newState = state.slice();

      state.map((category, index) => {
        if (state[index].id === action.payload.id) {
          newState.splice(index, 1);
        }
      });

      return newState;
    }

    case TOGGLE_CATEGORY:
      return state.map((category) => {
        if (category.id === action.id) {
          return Object.assign({}, category, {
            expanded: !category.expanded
          });
        }
        return category;
      });

    case DRAG_BOOKMARK: {
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
          const bookmark = state.find((item) => item.id === sourceCategoryId).bookmarks[sourceIndex];
          
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
