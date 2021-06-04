import { connect } from 'react-redux';
import Component from './Search';

import { loadMoreBookmarks } from '../../_state/search/actions';
import { changeDashboard } from '../../_state/dashboards/actions';

const mapStateToProps = (state) => ({
  dashboards: state.search.dashboards,
  total: state.search.total,
  offset: state.search.offset,
  limit: state.search.limit,
  keyword: state.search.keyword,
  pending: state.search.pending,
  error: state.search.error,
  hasSidebar: state.user.settings.dashboardsStyle === 'sidebar',
  dashboardsOpen: state.user.settings.pinned,
  newtab: state.user.settings.openLinksInNewTab,
  darkMode: state.user.settings.darkMode,
  isExtension: state.extension.active
});
const mapDispatchToProps = {
  loadMoreBookmarks,
  changeDashboard
};
const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export default Container;
