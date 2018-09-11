import { connect } from 'react-redux';
import Component from './Dashboards';
import { actions as modalActions } from '../../_state/modal';
import { actions as dashboardsActions } from '../../_state/dashboards';

export const mapStateToProps = function(state) {
  return {
    dashboards: state.dashboards.items,
    activeId: state.dashboards.active,
    open: state.dashboards.open
  };
};

export const mapDispatchToProps = function(dispatch) {
  return {
    openModal: (modal, data) => {
      dispatch(modalActions.openModal(modal, data));
    },
    changeDashboard: (id) => {
      dispatch(dashboardsActions.changeDashboard(id));
    },
    toggleDashboardOpen: () => {
      dispatch(dashboardsActions.toggleDashboardOpen());
    }
  };
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default Container;
