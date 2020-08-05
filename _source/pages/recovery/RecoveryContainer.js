import { connect } from 'react-redux';

import Component from './Recovery';
import { confirm, deny } from '../../_state/user/actions';

const mapDispatchToProps = {
  confirm,
  deny
};
const RecoveryContainer = connect(
  null,
  mapDispatchToProps
)(Component);

export default RecoveryContainer;
