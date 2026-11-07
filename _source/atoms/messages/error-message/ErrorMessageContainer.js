import { connect } from 'react-redux';
import Component from './ErrorMessage';

export const mapStateToProps = (state) => ({
  darkMode: state.user.settings.darkMode,
  messages: state.intl.messages
});

const Container = connect(mapStateToProps)(Component);

export default Container;
