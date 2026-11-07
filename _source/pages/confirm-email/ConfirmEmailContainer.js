import { connect } from 'react-redux';

import { confirmEmail } from '../../_state/user/actions';
import Component from './ConfirmEmail';

const mapDispatchToProps = {
  confirmEmail
};
const Container = connect(null, mapDispatchToProps)(Component);

export default Container;
