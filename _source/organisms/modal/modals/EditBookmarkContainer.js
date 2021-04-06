import { connect } from 'react-redux';
import Component from './EditBookmark';
import { getTitle } from '../../../_state/bookmarks/actions';

const mapStateToProps = (state) => ({
  autofillBookmarkNames: state.user.settings.autofillBookmarkNames,
  enableNotes: state.user.settings.enableNotes
});
const mapDispatchToProps = {
  getTitle
};
const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export default Container;
