import { connect } from 'react-redux';
import Component from './Menu';

const mapStateToProps = (state) => ({
  isBeta: state.user.isBeta
});
const Container = connect(
  mapStateToProps
)(Component);

export default Container;
