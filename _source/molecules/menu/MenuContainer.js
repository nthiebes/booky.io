import { connect } from 'react-redux';
import Component from './Menu';

const mapStateToProps = (state) => ({
  voted: state.user.voted
});
const Container = connect(
  mapStateToProps
)(Component);

export default Container;
