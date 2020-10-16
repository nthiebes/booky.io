import { connect } from 'react-redux';

import Component from './Fullscreen';
import { updateExtensionData } from '../../_state/extension/actions';

const mapDispatchToProps = {
  updateExtensionData
};
const Container = connect(
  null,
  mapDispatchToProps
)(Component);

export default Container;
