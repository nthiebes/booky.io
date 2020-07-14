import { connect } from 'react-redux';

import Component from './Activate';
import { activate } from '../../_state/user/actions';

const mapDispatchToProps = {
  activate
};
const ActivateContainer = connect(
  null,
  mapDispatchToProps
)(Component);

export default ActivateContainer;
