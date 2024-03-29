import { connect } from 'react-redux';
import Component from './Help';

export const mapStateToProps = (state) => ({
  darkMode: state.user.settings.darkMode,
  stickyHeader: state.user.settings.stickyHeader
});

const Container = connect(mapStateToProps)(Component);

export default Container;
