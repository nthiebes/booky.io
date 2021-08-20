import { connect } from 'react-redux';

import Component from './Upsell';

export const mapStateToProps = () => ({
  // username: state.user.name
});

const ContactContainer = connect(mapStateToProps)(Component);

export default ContactContainer;
