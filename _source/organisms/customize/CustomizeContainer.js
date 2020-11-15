import { connect } from 'react-redux';

import Component from './Customize';
import { updateSettings } from '../../_state/user/actions';

const mapStateToProps = (state) => ({
  navColor: state.user.settings.navigationBarColor,
  newtab: state.user.settings.openLinksInNewTab,
  maxWidth: state.user.settings.maxWidth,
  closeEditMode: state.user.settings.closeEditMode,
  dashboardsStyle: state.user.settings.dashboardsStyle,
  blurEffect: state.user.settings.blurEffect,
  stickyHeader: state.user.settings.stickyHeader,
  stickyToolbar: state.user.settings.stickyToolbar,
  darkMode: state.user.settings.darkMode,
  autofillBookmarkNames: state.user.settings.autofillBookmarkNames,
  categoriesLayout: state.user.settings.categoriesLayout,
  bookmarkEditOnHover: state.user.settings.bookmarkEditOnHover,
  minimalBookmarkButton: state.user.settings.minimalBookmarkButton,
  enableNotes: state.user.settings.enableNotes,
  isExtension: state.extension.active,
  maxColumnCount: state.user.settings.maxColumnCount
});
const mapDispatchToProps = {
  updateSettings
};
const CustomizeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default CustomizeContainer;
