import { connect } from 'react-redux';
import Component from './Sidebar';
import { actions as sidebarActions } from '../../_state/sidebar';
import { actions as modalActions } from '../../_state/modal';

export const mapStateToProps = function(state) {
  return {
    loggedIn: state.booky.loggedIn,
    open: state.sidebar.open
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
