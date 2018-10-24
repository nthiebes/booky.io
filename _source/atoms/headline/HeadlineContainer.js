import { connect } from 'react-redux';
import Component from './Headline';

export const mapStateToProps = (state) => ({
  darkMode: state.user.darkMode
});

const Container = connect(
  mapStateToProps
)(Component);

export default Container;
