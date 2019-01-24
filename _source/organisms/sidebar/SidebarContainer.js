import { connect } from 'react-redux';
import Component from './Sidebar';
import { actions as sidebarActions } from '../../_state/sidebar';
import { actions as modalActions } from '../../_state/modal';

export const mapStateToProps = function(state) {
  return {
    loggedIn: state.user.loggedIn,
    open: state.sidebar.open,
    dashboardsSidebar: state.user.settings.dashboards === 'sidebar',
    darkMode: state.user.settings.darkMode
  };
};

export const mapDispatchToProps = function(dispatch) {
  return {
    closeMenu: () => {
      dispatch(sidebarActions.closeSidebar());
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
