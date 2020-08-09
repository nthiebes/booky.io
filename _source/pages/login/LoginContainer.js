import { connect } from 'react-redux';

import Component from './Login';
import { login, activate, confirm, deny } from '../../_state/user/actions';

export const mapDispatchToProps = {
  login,
  activate,
  confirm,
  deny
};

const LoginContainer = connect(
  null,
  mapDispatchToProps
)(Component);

export default LoginContainer;
