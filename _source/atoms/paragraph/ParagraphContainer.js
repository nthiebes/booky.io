import { connect } from 'react-redux';
import Component from './Paragraph';

export const mapStateToProps = (state) => ({
  darkMode: state.user.settings.darkMode
});

const Container = connect(
  mapStateToProps
)(Component);

export default Container;
