import { connect } from 'react-redux';
import Component from './Footer';

export const mapStateToProps = function(state) {
  return {
    dashboardsOpen: state.user.pinned,
    hasSidebar: state.dashboards.sidebar,
    loggedIn: state.user.loggedIn
  };
};

const Container = connect(
  mapStateToProps
)(Component);

export default Container;
