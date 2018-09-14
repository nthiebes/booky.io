import { connect } from 'react-redux';

import Component from './Login';
import { updateUser } from '../../_state/user/actions';

export const mapDispatchToProps = {
  updateUser
};

const LoginContainer = connect(
  null,
  mapDispatchToProps
)(Component);

export default LoginContainer;
