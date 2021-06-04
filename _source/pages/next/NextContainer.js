import { connect } from 'react-redux';
import {
  getPollResults,
  updateUserData,
  vote
} from '../../_state/user/actions';
import Component from './Next';

const mapStateToProps = (state) => ({
  voted: state.user.settings.voted
});
const mapDispatchToProps = {
  getPollResults,
  updateUserData,
  vote
};
const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export default Container;
