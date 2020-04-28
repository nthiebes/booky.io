import { connect } from 'react-redux';
import Component from './Modal';
import { closeModal } from '../../_state/modal/actions';
import {
  addCategory,
  editCategory,
  deleteCategory
} from '../../_state/categories/actions';
import {
  addBookmark,
  editBookmark,
  deleteBookmark
} from '../../_state/bookmarks/actions';
import {
  addDashboard,
  editDashboard,
  deleteDashboard
} from '../../_state/dashboards/actions';
import { deleteAccount } from '../../_state/user/actions';
import { resetSearch } from '../../_state/search/actions';

export const mapStateToProps = (state) => ({
  modal: state.modal.modal,
  open: state.modal.open,
  darkMode: state.user.settings.darkMode,
  data: {
    ...state.modal.data,
    categories: state.categories.filter(({id}) => id !== state.modal.data.id),
    dashboards: state.dashboards.items.filter(({id}) => id !== state.modal.data.id),
    activeDashboard: state.user.settings.defaultDashboardId
  }
});

export const mapDispatchToProps = {
  closeModal,
  addBookmark,
  editBookmark,
  deleteBookmark,
  addCategory,
  editCategory,
  deleteCategory,
  addDashboard,
  editDashboard,
  deleteDashboard,
  deleteAccount,
  resetSearch
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default Container;
