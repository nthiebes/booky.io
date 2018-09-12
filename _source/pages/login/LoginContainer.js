import { connect } from 'react-redux';
import Component from './Login';

import { login } from '../../_state/booky/actions';

export const mapStateToProps = function(state) {
  return {
    loggedIn: state.booky.loggedIn
  };
};

export const mapDispatchToProps = {
  login
};

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default LoginContainer;
