import { connect } from 'react-redux';

import Component from './Forgot';
import { forgot } from '../../_state/user/actions';

const mapDispatchToProps = {
  forgot
};
const ForgotContainer = connect(
  null,
  mapDispatchToProps
)(Component);

export default ForgotContainer;
