import { connect } from 'react-redux';

import Component from './Login';
import { login, activate, confirm, deny } from '../../_state/user/actions';

const matchStateToProps = (state) => ({
  isExtension: state.extension.active
});
const mapDispatchToProps = {
  login,
  activate,
  confirm,
  deny
};
const LoginContainer = connect(
  matchStateToProps,
  mapDispatchToProps
)(Component);

export default LoginContainer;
