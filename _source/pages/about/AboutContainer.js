import { connect } from 'react-redux';

import Component from './About';

const mapStateToProps = (state) => ({
  stickyHeader: state.user.settings.stickyHeader
});
const Container = connect(mapStateToProps)(Component);

export default Container;
