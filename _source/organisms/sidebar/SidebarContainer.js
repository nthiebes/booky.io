import { connect } from 'react-redux';
import Component from './Sidebar';
import { closeSidebar } from '../../_state/sidebar/actions';
import { openModal } from '../../_state/modal/actions';
import { logout } from '../../_state/user/actions';

export const mapStateToProps = (state) => ({
  loggedIn: state.user.loggedIn,
  open: state.sidebar.open,
  hasSidebar: state.user.settings.dashboardsStyle === 'sidebar',
  darkMode: state.user.settings.darkMode,
  color: state.user.settings.navigationBarColor
});

export const mapDispatchToProps = {
  closeSidebar,
  openModal,
  logout
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default Container;
