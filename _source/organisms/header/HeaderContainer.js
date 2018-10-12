import { connect } from 'react-redux';
import Component from './Header';
import { actions as sidebarActions } from '../../_state/sidebar';
import { actions as modalActions } from '../../_state/modal';

export const mapStateToProps = function(state) {
  return {
    loggedIn: state.user.loggedIn,
    sidebarOpen: state.sidebar.open,
    color: state.user.navColor,
    sticky: state.user.stickyHeader
  };
};

export const mapDispatchToProps = function(dispatch) {
  return {
    onMenuClick: () => {
      dispatch(sidebarActions.toggleSidebar());
      // dispatch(sidebarActions.closeSidebar());
      // dispatch(headerActions.closeDashboards());
    },
    onSidebarClick: () => {
      // dispatch(sidebarActions.toggleSidebar());
      // dispatch(headerActions.closeMenu());
      // dispatch(headerActions.closeDashboards());
    },
    onDashboardsClick: () => {
      // dispatch(headerActions.toggleDashboards());
      // dispatch(sidebarActions.closeSidebar());
      // dispatch(headerActions.closeMenu());
    },
    onHeaderClick: () => {
      dispatch(sidebarActions.closeSidebar());
      // dispatch(sidebarActions.closeSidebar());
      // dispatch(headerActions.closeDashboards());
    },
    openModal: (modal, data) => {
      dispatch(modalActions.openModal(modal, data));
    }
  };
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default Container;
