import { connect } from 'react-redux';

import { getDashboards, changeDashboard } from '../../_state/dashboards/actions';
import { getBookmarks } from '../../_state/bookmarks/actions';
import Component from './Open';

const mapStateToProps = (state) => ({
  categories: state.categories,
  dashboards: state.dashboards.items,
  dashboardsPending: state.dashboards.pending,
  activeDashboard: state.user.settings.defaultDashboardId,
  keywordExists: state.search.total !== null || state.search.pending
});
const mapDispatchToProps = {
  getDashboards,
  changeDashboard,
  getBookmarks
};
const OpenContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default OpenContainer;
