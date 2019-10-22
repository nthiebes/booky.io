import { connect } from 'react-redux';

import Component from './Contact';

export const mapStateToProps = (state) => ({
  username: state.user.name,
  email: state.user.email
});

const ContactContainer = connect(
  mapStateToProps
)(Component);

export default ContactContainer;
