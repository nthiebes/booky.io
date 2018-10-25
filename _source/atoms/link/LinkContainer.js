import { connect } from 'react-redux';
import Component from './Link';

export const mapStateToProps = (state) => ({
  darkMode: state.user.darkMode
});

const Container = connect(
  mapStateToProps
)(Component);

export default Container;
