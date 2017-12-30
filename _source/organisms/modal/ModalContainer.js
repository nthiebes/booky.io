import { connect } from 'react-redux';
import Component from './Modal';
import { actions as modalActions } from '../../_state/modal';
import { actions as categoriesActions } from '../../_state/categories';
import { actions as dashboardsActions } from '../../_state/dashboards';

export const mapStateToProps = function(state) {
  return {
    modal: state.modal.modal,
    open: state.modal.open,
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
      dispatch(modalActions.closeModal());
    },
    editBookmark: (data) => {
      dispatch(categoriesActions.editBookmark(data));
      dispatch(modalActions.closeModal());
    },
    deleteBookmark: (data) => {
      dispatch(categoriesActions.deleteBookmark(data));
      dispatch(modalActions.closeModal());
    },
    addCategory: (data) => {
      dispatch(categoriesActions.addCategory(data));
      dispatch(modalActions.closeModal());
    },
    editCategory: (data) => {
      dispatch(categoriesActions.editCategory(data));
      dispatch(modalActions.closeModal());
    },
    deleteCategory: (data) => {
      dispatch(categoriesActions.deleteCategory(data));
      dispatch(modalActions.closeModal());
    },
    addDashboard: (data) => {
      dispatch(dashboardsActions.addDashboard(data));
      dispatch(modalActions.closeModal());
    },
    editDashboard: (data) => {
      dispatch(dashboardsActions.editDashboard(data));
      dispatch(modalActions.closeModal());
    },
    deleteDashboard: (data) => {
      dispatch(dashboardsActions.deleteDashboard(data));
      dispatch(modalActions.closeModal());
    }
  };
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default Container;
