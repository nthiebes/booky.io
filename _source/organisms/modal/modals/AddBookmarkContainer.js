import { connect } from 'react-redux';
import Component from './AddBookmark';
import { getTitle } from '../../../_state/bookmarks/actions';

const mapStateToProps = (state) => ({
  autofillBookmarkNames: state.user.settings.autofillBookmarkNames
});
const mapDispatchToProps = {
  getTitle
};
const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default Container;
