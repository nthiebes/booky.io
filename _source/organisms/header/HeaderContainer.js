import { connect } from 'react-redux';
import Component from './Header';
import { logout } from '../../_state/user/actions';
import { toggleSidebar, closeSidebar } from '../../_state/sidebar/actions';
import { openModal } from '../../_state/modal/actions';

export const mapStateToProps = (state) => ({
  loggedIn: state.user.loggedIn,
  sidebarOpen: state.sidebar.open,
  color: state.user.settings.navigationBarColor,
  sticky: state.user.settings.stickyHeader,
  hasCategories: state.categories.length > 0,
  dashboardsPending: state.dashboards.pending
});

export const mapDispatchToProps = {
  toggleSidebar,
  closeSidebar,
  logout,
  openModal
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default Container;
