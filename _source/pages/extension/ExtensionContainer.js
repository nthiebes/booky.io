import { connect } from 'react-redux';

import Component from './Extension';

export const mapStateToProps = (state) => ({
  username: state.user.username,
  email: state.user.email
});

const ExtensionContainer = connect(
  mapStateToProps
)(Component);

export default ExtensionContainer;
