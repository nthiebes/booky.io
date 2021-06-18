import { connect } from 'react-redux';

import { updateSettings } from '../../_state/user/actions';
import Component from './About';

const mapStateToProps = (state) => ({
  stickyHeader: state.user.settings.stickyHeader,
  newsVersion: state.user.settings.newsVersion
});
const mapDispatchToProps = {
  updateSettings
};
const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export default Container;
