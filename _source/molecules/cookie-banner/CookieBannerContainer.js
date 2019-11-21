import { connect } from 'react-redux';

import Component from './CookieBanner';

export const mapStateToProps = (state) => ({
  language: state.intl.locale,
  darkMode: state.user.settings.darkMode
});

const Container = connect(
  mapStateToProps
)(Component);

export default Container;
