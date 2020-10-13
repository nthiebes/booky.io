import { connect } from 'react-redux';

import Component from './Join';
import { join, validate } from '../../_state/user/actions';

const mapStateToProps = (state) => ({
  language: state.intl.locale
});
const mapDispatchToProps = {
  join,
  validate
};
const JoinContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default JoinContainer;
