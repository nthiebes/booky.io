import { connect } from 'react-redux';

import { getCategories } from '../../../_state/categories-sorting/actions';
import { addCategory } from '../../../_state/categories/actions';
import { removeBookmark } from '../../../_state/bookmarks/actions';
import Component from './MoveBookmark';

const mapStateToProps = (state) => ({
  categories: state.categoriesSorting.items,
  categoriesPending: state.categoriesSorting.pending,
  categoriesError: state.categoriesSorting.error
});
const mapDispatchToProps = {
  getCategories,
  addCategory,
  removeBookmark
};
const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export default Container;
