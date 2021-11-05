import { connect } from 'react-redux';
import Component from './Terms';

const mapStateToProps = (state) => ({
  locale: state.intl.locale,
  darkMode: state.user.settings.darkMode
});
const Container = connect(mapStateToProps)(Component);

export default Container;
