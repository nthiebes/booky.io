import { connect } from 'react-redux';
import Component from './Empty';

export const mapStateToProps = (state) => ({
  darkMode: state.user.settings.darkMode
});

const Container = connect(mapStateToProps)(Component);

export default Container;
