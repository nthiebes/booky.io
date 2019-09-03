import { connect } from 'react-redux';
import Component from './Footer';

export const mapStateToProps = function(state) {
  return {
    dashboardsOpen: state.user.settings.pinned,
    hasSidebar: state.user.settings.dashboardsStyle === 'sidebar',
    loggedIn: state.user.loggedIn,
    toolbarSticky: state.user.settings.stickyToolbar,
    darkMode: state.user.settings.darkMode
  };
};

const Container = connect(
  mapStateToProps
)(Component);

export default Container;
