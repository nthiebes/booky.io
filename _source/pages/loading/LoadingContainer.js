import { connect } from 'react-redux';

import Component from './Loading';

const mapStateToProps = (state) => ({
  isExtension: state.extension.active
});
const LoadingContainer = connect(
  mapStateToProps
)(Component);

export default LoadingContainer;
