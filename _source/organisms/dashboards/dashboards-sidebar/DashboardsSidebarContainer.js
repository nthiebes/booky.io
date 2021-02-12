import { connect } from 'react-redux';

import Component from './DashboardsSidebar';
import { updateSettings } from '../../../_state/user/actions';

export const mapStateToProps = (state) => ({
  pinned: state.user.settings.pinned,
  currentlySticky: state.toolbar.currentlySticky,
  headerSticky: state.user.settings.stickyHeader,
  toolbarSticky: state.user.settings.stickyToolbar,
  darkMode: state.user.settings.darkMode
});

export const mapDispatchToProps = {
  updateSettings
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export default Container;
