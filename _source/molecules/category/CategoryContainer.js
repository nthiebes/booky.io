import { connect } from 'react-redux';

import Component from './Category';
import { openModal } from '../../_state/modal/actions';
import { toggleCategory } from '../../_state/categories/actions';
import { getBookmarks } from '../../_state/bookmarks/actions';

export const mapStateToProps = (state) => ({
  darkMode: state.user.settings.darkMode,
  closeEditMode: state.user.settings.closeEditMode,
  minimalBookmarkButton: state.user.settings.minimalBookmarkButton,
  bookmarkEditOnHover: state.user.settings.bookmarkEditOnHover,
  isMobile: state.user.isMobile,
  isExtension: state.extension.active
});

export const mapDispatchToProps = {
  openModal,
  toggleCategory,
  getBookmarks
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export default Container;
