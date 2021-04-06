import { connect } from 'react-redux';
import { updateSettings, getPollResults } from '../../_state/user/actions';
import Component from './Next';

const mapStateToProps = (state) => ({
  voted: state.user.settings.voted
});
const mapDispatchToProps = {
  updateSettings,
  getPollResults
};
const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export default Container;
