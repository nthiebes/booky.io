import { connect } from 'react-redux';

import Component from './Section';

const mapStateToProps = (state) => ({
  darkMode: state.user.settings.darkMode
});
const Container = connect(mapStateToProps)(Component);

export default Container;
