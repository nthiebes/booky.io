import { connect } from 'react-redux';
import {
  updateUserData,
  getPollResults,
  vote
} from '../../_state/user/actions';
import Component from './Next';

const mapStateToProps = (state) => ({
  voted: state.user.settings.voted
});
const mapDispatchToProps = {
  updateUserData,
  getPollResults,
  vote
};
const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export default Container;
