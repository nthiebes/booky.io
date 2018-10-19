import { connect } from 'react-redux';
import Component from './Footer';

export const mapStateToProps = function(state) {
  return {
    dashboardsOpen: state.user.pinned,
    hasSidebar: state.user.dashboards === 'sidebar',
    loggedIn: state.user.loggedIn,
    toolbarSticky: state.user.stickyToolbar,
    darkMode: state.user.darkMode
  };
};

const Container = connect(
  mapStateToProps
)(Component);

export default Container;
