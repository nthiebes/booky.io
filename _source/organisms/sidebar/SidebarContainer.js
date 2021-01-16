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
  isBeta: state.user.isBeta,
  newsVersion: state.user.settings.newsVersion
});

export const mapDispatchToProps = {
  closeSidebar,
  logout
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default Container;
