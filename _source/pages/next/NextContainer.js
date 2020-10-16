import { connect } from 'react-redux';
import { updateUserData } from '../../_state/user/actions';
import Component from './Next';

const mapDispatchToProps = {
  updateUserData
};
const mapStateToProps = (state) => ({
  voted: state.user.voted
});
const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default Container;
