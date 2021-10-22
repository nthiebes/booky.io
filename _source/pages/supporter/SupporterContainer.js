import { connect } from 'react-redux';

import Component from './Supporter';

const mapStateToProps = (state) => ({
  premium: state.user.premium,
  stickyHeader: state.user.settings.stickyHeader,
  loggedIn: state.user.loggedIn
});
const Container = connect(mapStateToProps)(Component);

export default Container;
