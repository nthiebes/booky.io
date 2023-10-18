import { connect } from 'react-redux';

import { newSubscription } from '../../_state/subscription/actions';
import { updateUserData } from '../../_state/user/actions';
import Component from './Upsell';

const mapDispatchToProps = {
  newSubscription,
  updateUserData
};
const ContactContainer = connect(null, mapDispatchToProps)(Component);

export default ContactContainer;
