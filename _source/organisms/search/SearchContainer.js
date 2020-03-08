import { connect } from 'react-redux';
import Component from './Search';

import { searchBookmarks } from '../../_state/search/actions';

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
  darkMode: state.user.settings.darkMode
});
const mapDispatchToProps = {
  searchBookmarks
};
const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default Container;
