import {
  ADD_BOOKMARK,
  EDIT_BOOKMARK,
  DELETE_BOOKMARK,
  DRAG_BOOKMARK,
  ADD_CATEGORY,
  EDIT_CATEGORY,
  DELETE_CATEGORY,
  TOGGLE_CATEGORY
} from './actions';
import { arrayMove } from '../../_utils/array';

const categories = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOKMARK: {
      const { categoryId, url, name } = action.payload;

      return state.map((category) => {
        if (category.id !== categoryId) {
          return category;
        }
        
        return {
          ...category,
          bookmarks: [
            ...category.bookmarks,
            {
              id: 123456789,
              name,
              url,
              categoryId
            }
          ]
        };    
      });
    }

    case EDIT_BOOKMARK: {
      const { id, url, name, categoryId } = action.payload;

      return state.map((category) => {
        if (category.id !== categoryId) {
          return category;
        }
        
        return {
          ...category,
          bookmarks: category.bookmarks.map((bookmark) => {
            if (bookmark.id !== id) {
              return bookmark;
            }
            
            return {
              ...bookmark,
              url,
              name
            };
          })
        };
      });
    }

    case DELETE_BOOKMARK: {
      const { id, categoryId } = action.payload;

      return state.map((category) => {
        if (category.id !== categoryId) {
          return category;
        }

        const newBookmarks = category.bookmarks.slice();

        newBookmarks.map((bookmark, index) => {
          if (bookmark.id === id) {
            newBookmarks.splice(index, 1);
          }
        });
        
        return {
          ...category,
          bookmarks: newBookmarks
        };
      });
    }

    case ADD_CATEGORY:
      return [
        ...state,
        {
          id: 123456789,
          name: action.payload.name,
          color: action.payload.color,
          dashboard: action.payload.dashboard,
          position: state.length,
          expanded: true,
          bookmarks: []
        }
      ];

    case EDIT_CATEGORY: {
      const { color, name } = action.payload;

      return state.map((category) => {
        if (category.id !== action.payload.id) {
          return category;
        }
        
        return {
          ...category,
          color,
          name
        };
      });
    }

    case DELETE_CATEGORY: {
      const { id, newId } = action.payload;
      let newState = state.slice();
      const bookmarks = newState.find((category) => category.id === id).bookmarks;

      // Move bookmarks
      newState = newState.map((category) => {
        if (category.id !== newId) {
          return category;
        }

        return {
          ...category,
          bookmarks: category.bookmarks.concat(bookmarks)
        };
      });

      // Remove category
      newState.map((category, index) => {
        if (category.id === id) {
          newState.splice(index, 1);
        }
      });

      return newState;
    }

    case TOGGLE_CATEGORY:
      return state.map((category) => {
        if (category.id === action.id) {
          return {
            ...category,
            expanded: !category.expanded
          };
        }
        return category;
      });

    case DRAG_BOOKMARK: {
      const { destinationIndex, destinationCategoryId, sourceIndex, sourceCategoryId } = action.data;

      return state.map((category) => {
        const bookmarks = [...category.bookmarks];
        
        if (category.id === sourceCategoryId) {

          // Same category - move bookmark
          if (category.id === destinationCategoryId) {
            arrayMove(bookmarks, sourceIndex, destinationIndex);
          // Different category - remove bookmark
          } else {
            bookmarks.splice(sourceIndex, 1);
          }

          return {
            ...category,
            bookmarks: [...bookmarks]
          };
        // Insert bookmark in new category
        } else if (category.id === destinationCategoryId) {
          const bookmark = state.find((item) => item.id === sourceCategoryId).bookmarks[sourceIndex];
          
          bookmarks.splice(destinationIndex, 0, bookmark);

          return {
            ...category,
            bookmarks: [...bookmarks]
          };
        }

        return category;
      });
    }
      
    default:
      return state;
  }
};

export default categories;
