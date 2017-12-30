import { connect } from 'react-redux';
import Component from './Header';
import { actions as headerActions } from '../../_state/header';
import { actions as sidebarActions } from '../../_state/sidebar';
import { actions as modalActions } from '../../_state/modal';

export const mapStateToProps = function(state) {
  return {
    menuOpen: state.header.menuOpen,
    sidebarOpen: state.sidebar.open,
    sticky: state.sidebar.stickyHeader,
    color: state.sidebar.headerColor,
    loggedIn: state.booky.loggedIn
  };
};

export const mapDispatchToProps = function(dispatch) {
  return {
    onMenuClick: () => {
      dispatch(headerActions.toggleMenu());
      dispatch(sidebarActions.closeSidebar());
      dispatch(headerActions.closeDashboards());
    },
    onSidebarClick: () => {
      dispatch(sidebarActions.toggleSidebar());
      dispatch(headerActions.closeMenu());
      dispatch(headerActions.closeDashboards());
    },
    onDashboardsClick: () => {
      dispatch(headerActions.toggleDashboards());
      dispatch(sidebarActions.closeSidebar());
      dispatch(headerActions.closeMenu());
    },
    onHeaderClick: () => {
      dispatch(headerActions.closeMenu());
      dispatch(sidebarActions.closeSidebar());
      dispatch(headerActions.closeDashboards());
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
