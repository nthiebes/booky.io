import { connect } from 'react-redux';

import Component from './Supporter';

const mapStateToProps = (state) => ({
  premium: state.user.settings.premium,
  stickyHeader: state.user.settings.stickyHeader
});
const Container = connect(mapStateToProps)(Component);

export default Container;
