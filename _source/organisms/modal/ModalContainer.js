import { connect } from 'react-redux';
import Component from './Modal';
import { actions as modalActions } from '../../_state/modal';
import { actions as categoriesActions } from '../../_state/categories';
import { actions as dashboardsActions } from '../../_state/dashboards';

export const mapStateToProps = function(state) {
  return {
    modal: state.modal.modal,
    open: state.modal.open,
    pending: state.modal.pending,
    darkMode: state.user.settings.darkMode,
    data: {
      ...state.modal.data,
      categories: state.categories.filter(({id}) => id !== state.modal.data.id),
      dashboards: state.dashboards.items.filter(({id}) => id !== state.modal.data.id),
      activeDashboard: state.dashboards.active
    }
  };
};

export const mapDispatchToProps = function(dispatch) {
  return {
    closeModal: () => {
      dispatch(modalActions.closeModal());
    },
    addBookmark: (data) => {
      dispatch(categoriesActions.addBookmark(data));
    },
    editBookmark: (data) => {
      dispatch(categoriesActions.editBookmark(data));
    },
    deleteBookmark: (data) => {
      dispatch(categoriesActions.deleteBookmark(data));
    },
    addCategory: (data) => {
      dispatch(categoriesActions.addCategory(data));
    },
    editCategory: (data) => {
      dispatch(categoriesActions.editCategory(data));
    },
    deleteCategory: (data) => {
      dispatch(categoriesActions.deleteCategory(data));
    },
    addDashboard: (data) => {
      dispatch(dashboardsActions.addDashboard(data));
    },
    editDashboard: (data) => {
      dispatch(dashboardsActions.editDashboard(data));
    },
    deleteDashboard: (data) => {
      dispatch(dashboardsActions.deleteDashboard(data));
    }
  };
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default Container;
