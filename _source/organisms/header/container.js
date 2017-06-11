import { connect } from 'react-redux';
import Component from './component.jsx';
import { actions as headerActions } from '../../_state/header';
import { actions as sidebarActions } from '../../_state/sidebar';

export const mapStateToProps = function(state) {
  return {
    'menuMainOpen': state.header.menuMainOpen,
    'sidebarOpen': state.sidebar.open,
    'dashboardsOpen': state.header.dashboardsOpen,
    'sticky': state.sidebar.stickyHeader,
    'color': state.sidebar.headerColor,
    'loggedIn': state.booky.loggedIn
  };
};

export const mapDispatchToProps = function(dispatch) {
  return {
    'onMenuMainClick': () => {
      dispatch(headerActions.toggleMainMenu());
      dispatch(sidebarActions.closeSidebar());
      dispatch(headerActions.closeDashboards());
    },
    'onSidebarClick': () => {
      dispatch(sidebarActions.toggleSidebar());
      dispatch(headerActions.closeMainMenu());
      dispatch(headerActions.closeDashboards());
    },
    'onDashboardsClick': () => {
      dispatch(headerActions.toggleDashboards());
      dispatch(sidebarActions.closeSidebar());
      dispatch(headerActions.closeMainMenu());
    },
    'onHeaderClick': () => {
      dispatch(headerActions.closeMainMenu());
      dispatch(sidebarActions.closeSidebar());
      dispatch(headerActions.closeDashboards());
    }
  };
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default Container;
