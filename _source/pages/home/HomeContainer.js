import { connect } from 'react-redux';
import Component from './Home';

export const mapStateToProps = function(state) {
  return {
    loggedIn: state.user.loggedIn,
    blurContent: state.modal.open && state.user.blurEffect,
    hasSidebar: state.user.dashboards === 'sidebar'
  };
};

const HomeContainer = connect(
  mapStateToProps
)(Component);

export default HomeContainer;
