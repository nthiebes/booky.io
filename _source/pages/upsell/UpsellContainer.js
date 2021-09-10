import { connect } from 'react-redux';

import { newSubscription } from '../../_state/subscription/actions';
import Component from './Upsell';

const mapDispatchToProps = {
  newSubscription
};
const ContactContainer = connect(null, mapDispatchToProps)(Component);

export default ContactContainer;
