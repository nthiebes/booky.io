import { connect } from 'react-redux';

import { getCategories } from '../../_state/categories-sorting/actions';
import Component from './CategoriesSorting';

const mapStateToProps = (state) => ({
  darkMode: state.user.settings.darkMode,
  categories: state.categoriesSorting.items,
  pending: state.categoriesSorting.pending,
  error: state.categoriesSorting.error
});
const mapDispatchToProps = {
  getCategories
};
const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default Container;
