import { connect } from 'react-redux';

import Component from './Login';
import { updateUser, updateSettings } from '../../_state/user/actions';

export const mapDispatchToProps = {
  updateUser,
  updateSettings
};

const LoginContainer = connect(
  null,
  mapDispatchToProps
)(Component);

export default LoginContainer;
