import fetcher from '../../_utils/fetcher';
import { decodeEmoji } from '../../_utils/string';
import { editCategory } from '../categories/actions';

export const updateCategoriesSorting = (data) => ({
  type: 'UPDATE_CATEGORIES_SORTING',
  data
});

export const getCategories = (dashboardId) => (dispatch) => {
  dispatch(
    updateCategoriesSorting({
      pending: true,
      items: [],
      error: null
    })
  );

  fetcher({
    url: `/dashboards/${dashboardId}/categories`,
    onSuccess: (data) => {
      dispatch(
        updateCategoriesSorting({
          items: data.map((category) => ({
            ...category,
            name: decodeEmoji(category.name)
          })),
          pending: false
        })
      );
    },
    onError: (error) => {
      dispatch(
        updateCategoriesSorting({
          error,
          pending: false
        })
      );
    }
  });
};

export const dragCategory = (dragData) => (dispatch) => {
  const { destinationIndex, categoryId } = dragData;

  dispatch({
    type: 'DRAG_CATEGORY',
    dragData
  });

  dispatch(
    editCategory({
      id: categoryId,
      position: destinationIndex + 1
    })
  );
};
