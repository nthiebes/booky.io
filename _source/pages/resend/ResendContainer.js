import { connect } from 'react-redux';

import Component from './Resend';
import { resend } from '../../_state/user/actions';

const mapDispatchToProps = {
  resend
};
const ResendContainer = connect(
  null,
  mapDispatchToProps
)(Component);

export default ResendContainer;
