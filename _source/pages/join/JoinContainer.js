import { connect } from 'react-redux';

import Component from './Join';
import { join } from '../../_state/user/actions';

const mapStateToProps = (state) => ({
  language: state.intl.locale
});
const mapDispatchToProps = {
  join
};
const JoinContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default JoinContainer;
