import { connect } from 'react-redux';

import Component from './Resend';
import { resend } from '../../_state/user/actions';

const mapDispatchToProps = {
  resend
};
const mapStateToProps = (state) => ({
  loggedIn: state.user.loggedIn
});
const ResendContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export default ResendContainer;
