import { connect } from 'react-redux';
import Component from './Modal';
import { actions as modalActions } from '../../_state/modal';
import { actions as categoriesActions } from '../../_state/categories';

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
    }
  };
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default Container;
