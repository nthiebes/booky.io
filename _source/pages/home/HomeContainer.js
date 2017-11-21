import { connect } from 'react-redux';
import Component from './Home';

export const mapStateToProps = function(state) {
  return {
    loggedIn: state.booky.loggedIn
  };
};

const HomeContainer = connect(
  mapStateToProps
)(Component);

export default HomeContainer;
