import { connect } from 'react-redux';
import Component from './Sidebar';
import { closeSidebar } from '../../_state/sidebar/actions';
import { logout } from '../../_state/user/actions';

export const mapStateToProps = (state) => ({
  loggedIn: state.user.loggedIn,
  open: state.sidebar.open,
  hasSidebar: state.user.settings.dashboardsStyle === 'sidebar',
  darkMode: state.user.settings.darkMode,
  color: state.user.settings.navigationBarColor,
  newsVersion: state.user.settings.newsVersion,
  voted: state.user.settings.voted
});

export const mapDispatchToProps = {
  closeSidebar,
  logout
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export default Container;
