import { connect } from 'react-redux';

import Component from './Login';
import { login, activate } from '../../_state/user/actions';

export const mapDispatchToProps = {
  login,
  activate
};

const LoginContainer = connect(
  null,
  mapDispatchToProps
)(Component);

export default LoginContainer;
