import { connect } from 'react-redux';

import Component from './Loading';

const mapStateToProps = (state) => ({
  isExtension: state.extension.active,
  loggedIn: state.user.loggedIn
});
const LoadingContainer = connect(mapStateToProps)(Component);

export default LoadingContainer;
