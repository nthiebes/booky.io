import { connect } from 'react-redux';
import Component from './Login';

import { login } from '../../_state/booky/actions';

export const mapDispatchToProps = {
  login
};

const LoginContainer = connect(
  null,
  mapDispatchToProps
)(Component);

export default LoginContainer;
