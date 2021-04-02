import { connect } from 'react-redux';

import Component from './Bookmarklet';

const mapStateToProps = (state) => ({
  language: state.intl.locale,
  isMobile: state.user.isMobile,
  stickyHeader: state.user.settings.stickyHeader
});
const Container = connect(mapStateToProps)(Component);

export default Container;
