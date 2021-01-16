import { connect } from 'react-redux';
import { updateSettings } from '../../_state/user/actions';
import Component from './Next';

const mapDispatchToProps = {
  updateSettings
};
const mapStateToProps = (state) => ({
  voted: state.user.settings.voted
});
const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default Container;
