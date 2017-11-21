import { connect } from 'react-redux';
import Component from './Home';

export const mapStateToProps = function(state) {
  return {
    'loggedIn': state.booky.loggedIn,
    'dashboard': state.dashboards.items[state.dashboards.active]
  };
};

const HomeContainer = connect(
  mapStateToProps
)(Component);

export default HomeContainer;
