import { connect } from 'react-redux';
import Component from './Modal';
import { closeModal } from '../../_state/modal/actions';
import {
  addBookmark,
  editBookmark,
  deleteBookmark,
  addCategory,
  editCategory,
  deleteCategory
} from '../../_state/categories/actions';
import {
  addDashboard,
  editDashboard,
  deleteDashboard
} from '../../_state/dashboards/actions';
import { deleteAccount } from '../../_state/user/actions';

export const mapStateToProps = (state) => ({
  modal: state.modal.modal,
  open: state.modal.open,
  darkMode: state.user.settings.darkMode,
  data: {
    ...state.modal.data,
    categories: state.categories.filter(({id}) => id !== state.modal.data.id),
    dashboards: state.dashboards.items.filter(({id}) => id !== state.modal.data.id),
    activeDashboard: state.dashboards.active
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
  deleteAccount
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default Container;
