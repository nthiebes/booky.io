import { arrayMove } from '../../_utils/array';
import { removeUndefined } from '../../_utils/object';
import initialState from '../../initialState';

// eslint-disable-next-line max-statements
const categories = (state = [], action) => {
  const {
    name,
    color,
    id,
    position,
    newId,
    dashboardId,
    hidden,
    bookmarks,
    pending,
    categoryId,
    url,
    dragData,
    error,
    favicon
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
              categoryId,
              favicon
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
              name,
              favicon
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
          noFetch: true,
          bookmarks: []
        }
      ];

    case 'EDIT_CATEGORY': {
      return state.filter((category) => {
        if (category.id !== id || !dashboardId) {
          return true;
        }

        return category.dashboardId === dashboardId;
      }).map((category) => {
        if (category.id !== id) {
          return category;
        }

        const data = removeUndefined({
          color,
          name,
          dashboardId,
          id,
          hidden,
          position
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
      const { destinationIndex, destinationCategoryId, sourceIndex, sourceCategoryId } = dragData;

      return state.map((category) => {
        const newBookmarks = [...category.bookmarks];
        
        if (category.id === sourceCategoryId) {

          // Same category - move bookmark
          if (category.id === destinationCategoryId) {
            arrayMove(newBookmarks, sourceIndex, destinationIndex);
          // Different category - remove bookmark
          } else {
            newBookmarks.splice(sourceIndex, 1);
          }

          return {
            ...category,
            bookmarks: [...newBookmarks]
          };
        // Insert bookmark in new category
        } else if (category.id === destinationCategoryId) {
          const bookmark = state.find((item) => item.id === sourceCategoryId).bookmarks[sourceIndex];
          
          newBookmarks.splice(destinationIndex, 0, bookmark);

          return {
            ...category,
            bookmarks: [...newBookmarks]
          };
        }

        return category;
      });
    }

    case 'SET_CATEGORIES':
      return action.categories.map((category) => ({
        ...category,
        bookmarks: category.bookmarks ? category.bookmarks : []
      }));
    
    case 'SET_BOOKMARKS': {
      return state.map((category) => {
        if (category.id !== id) {
          return category;
        }
        
        return {
          ...category,
          bookmarks,
          pending: false,
          error
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

    case 'DRAG_CATEGORY': {
      const { destinationIndex, sourceIndex, categoryId: dragCategoryId } = dragData;
      const newCategories = [...state];
      const categoryExists = Boolean(state.find((category) => category.id === dragCategoryId));

      if (categoryExists) {
        arrayMove(newCategories, sourceIndex, destinationIndex);
      }

      return newCategories;
    }

    case 'RESET_USER_STATE': {
      return initialState.categories;
    }
      
    default:
      return state;
  }
};

export default categories;
