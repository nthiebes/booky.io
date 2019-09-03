import { connect } from 'react-redux';
import Component from './Page';

export const mapStateToProps = (state) => ({
  blurContent: state.modal.open && state.user.settings.blurEffect,
  stickyHeader: state.user.settings.stickyHeader,
  darkMode: state.user.settings.darkMode
});

const Container = connect(
  mapStateToProps
)(Component);

export default Container;
