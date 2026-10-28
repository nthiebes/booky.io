import { connect } from 'react-redux';

import Component from './Forgot';
import { forgot } from '../../_state/user/actions';

const mapStateToProps = (state) => ({
  language: state.intl.locale
});
const mapDispatchToProps = {
  forgot
};
const ForgotContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export default ForgotContainer;
