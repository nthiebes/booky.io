import { connect } from 'react-redux';
import Component from './Dashboards';
import { actions as modalActions } from '../../_state/modal';
import { actions as dashboardsActions } from '../../_state/dashboards';
import { actions as sidebarActions } from '../../_state/sidebar';
import { updateUser } from '../../_state/user/actions';

export const mapStateToProps = (state) => ({
  dashboards: state.dashboards.items,
  activeId: state.dashboards.active,
  open: state.user.pinned
});

export const mapDispatchToProps = (dispatch) => ({
  openModal: (modal, data) => {
    dispatch(modalActions.openModal(modal, data));
  },
  changeDashboard: (id) => {
    dispatch(dashboardsActions.changeDashboard(id));
    dispatch(sidebarActions.closeSidebar());
  },
  toggleDashboardOpen: (open) => {
    dispatch(updateUser({
      pinned: open
    }));
  }
});

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default Container;
