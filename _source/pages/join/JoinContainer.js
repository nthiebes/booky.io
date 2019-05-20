import { connect } from 'react-redux';

import Component from './Join';
import { join } from '../../_state/user/actions';

export const mapDispatchToProps = {
  join
};

const JoinContainer = connect(
  null,
  mapDispatchToProps
)(Component);

export default JoinContainer;
