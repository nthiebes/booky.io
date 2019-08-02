import { arrayMove } from '../../_utils/array';
import { removeUndefined } from '../../_utils/object';

// eslint-disable-next-line max-statements
const categories = (state = [], action) => {
  const {
    name,
    color,
    id,
    position,
    newId,
    dashboard,
    hidden,
    bookmarks,
    pending,
    categoryId,
    url
  } = action;

  switch (action.type) {
    case 'ADD_BOOKMARK': {
      return state.map((category) => {
        if (category.id !== categoryId) {
          return category;
        }
        
        return {
          ...category,
          bookmarks: [
            ...category.bookmarks,
            {
              id,
              name,
              url,
              categoryId
            }
          ]
        };    
      });
    }

    case 'EDIT_BOOKMARK': {
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

    case 'DELETE_BOOKMARK': {
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

    case 'ADD_CATEGORY':
      return [
        ...state,
        {
          id,
          name,
          color,
          position,
          hidden: false,
          bookmarks: []
        }
      ];

    case 'EDIT_CATEGORY': {
      return state.map((category) => {
        if (category.id !== id) {
          return category;
        }

        const data = removeUndefined({
          color,
          name,
          dashboard,
          id,
          hidden
        });
        
        return {
          ...category,
          ...data
        };
      });
    }

    case 'DELETE_CATEGORY': {
      let newState = state.slice();
      const oldBookmarks = newState.find((category) => category.id === id).bookmarks;

      // Move bookmarks
      newState = newState.map((category) => {
        if (category.id !== newId) {
          return category;
        }

        return {
          ...category,
          bookmarks: category.bookmarks.concat(oldBookmarks)
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

    case 'DRAG_BOOKMARK': {
      const { destinationIndex, destinationCategoryId, sourceIndex, sourceCategoryId } = action.data;

      return state.map((category) => {
        const oldBookmarks = [...category.bookmarks];
        
        if (category.id === sourceCategoryId) {

          // Same category - move bookmark
          if (category.id === destinationCategoryId) {
            arrayMove(oldBookmarks, sourceIndex, destinationIndex);
          // Different category - remove bookmark
          } else {
            oldBookmarks.splice(sourceIndex, 1);
          }

          return {
            ...category,
            bookmarks: [...oldBookmarks]
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

    case 'SET_CATEGORIES':
      return action.categories;
    
    case 'SET_BOOKMARKS': {
      return state.map((category) => {
        if (category.id !== id) {
          return category;
        }
        
        return {
          ...category,
          bookmarks,
          pending: false
        };
      });
    }

    case 'SET_BOOKMARKS_PENDING': {
      return state.map((category) => {
        if (category.id !== id) {
          return category;
        }
        
        return {
          ...category,
          pending
        };
      });
    }
      
    default:
      return state;
  }
};

export default categories;
