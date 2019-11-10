import { connect } from 'react-redux';
import Component from './Footer';

export const mapStateToProps = (state) => ({
  dashboardsOpen: state.user.settings.pinned,
  hasSidebar: state.user.settings.dashboardsStyle === 'sidebar',
  loggedIn: state.user.loggedIn,
  toolbarSticky: state.user.settings.stickyToolbar,
  darkMode: state.user.settings.darkMode,
  locale: state.intl.locale
});

const Container = connect(
  mapStateToProps
)(Component);

export default Container;
