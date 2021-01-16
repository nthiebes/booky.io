import { connect } from 'react-redux';
import Component from './Menu';

const mapStateToProps = (state) => ({
  isBeta: state.user.isBeta,
  newsVersion: state.user.settings.newsVersion,
  voted: state.user.settings.voted
});
const Container = connect(
  mapStateToProps
)(Component);

export default Container;
