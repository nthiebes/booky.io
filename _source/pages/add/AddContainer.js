import { connect } from 'react-redux';

import {
  getDashboards,
  changeDashboard
} from '../../_state/dashboards/actions';
import { addBookmark } from '../../_state/bookmarks/actions';
import { openModal } from '../../_state/modal/actions';
import Component from './Add';

const mapStateToProps = (state) => ({
  name: state.extension.page.title,
  url: state.extension.page.url,
  note: state.extension.page.description,
  enableNotes: state.user.settings.enableNotes,
  categories: state.categories,
  dashboards: state.dashboards.items,
  dashboardsPending: state.dashboards.pending,
  activeDashboard: state.user.settings.defaultDashboardId
});
const mapDispatchToProps = {
  getDashboards,
  changeDashboard,
  addBookmark,
  openModal
};
const AddContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export default AddContainer;
