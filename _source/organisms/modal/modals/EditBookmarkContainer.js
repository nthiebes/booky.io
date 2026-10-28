import { connect } from 'react-redux';
import Component from './EditBookmark';
import { getTitle, getDuplicates } from '../../../_state/bookmarks/actions';
import { changeDashboard } from '../../../_state/dashboards/actions';

const mapStateToProps = (state) => ({
  autofillBookmarkNames: state.user.settings.autofillBookmarkNames,
  enableNotes: state.user.settings.enableNotes,
  isPremium: state.user.premium
});
const mapDispatchToProps = {
  getTitle,
  getDuplicates,
  changeDashboard
};
const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export default Container;
