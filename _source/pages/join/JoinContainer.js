import { connect } from 'react-redux';

import Component from './Join';
import { updateUser } from '../../_state/user/actions';

export const mapDispatchToProps = {
  updateUser
};

const JoinContainer = connect(
  null,
  mapDispatchToProps
)(Component);

export default JoinContainer;
