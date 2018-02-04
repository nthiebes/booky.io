import { connect } from 'react-redux';
import Component from './Dashboards';
import { actions as headerActions } from '../../_state/header';
import { actions as modalActions } from '../../_state/modal';
import { actions as dashboardsActions } from '../../_state/dashboards';

export const mapStateToProps = function(state) {
  return {
    dashboards: state.dashboards
  };
};

export const mapDispatchToProps = function(dispatch) {
  return {
    closeMenu: () => {
      dispatch(headerActions.closeMenu());
    },
    openModal: (modal, data) => {
      dispatch(modalActions.openModal(modal, data));
    },
    changeDashboard: (id) => {
      dispatch(dashboardsActions.changeDashboard(id));
      dispatch(headerActions.closeMenu());
    }
  };
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default Container;
