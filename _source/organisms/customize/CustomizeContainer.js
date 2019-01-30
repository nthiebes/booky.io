import { connect } from 'react-redux';

import Component from './Customize';
import { updateSettings } from '../../_state/user/actions';

export const mapStateToProps = (state) => ({
  navColor: state.user.settings.navigationBarColor,
  newtab: state.user.settings.openLinksInNewTab,
  maxWidth: state.user.settings.maxWidth,
  preserveEditMode: state.user.settings.preserveEditMode,
  dashboards: state.user.settings.dashboards,
  blurEffect: state.user.settings.blurEffect,
  stickyHeader: state.user.settings.stickyHeader,
  stickyToolbar: state.user.settings.stickyToolbar,
  darkMode: state.user.settings.darkMode
});

export const mapDispatchToProps = {
  updateSettings
};

const CustomizeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default CustomizeContainer;
