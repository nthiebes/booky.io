import { connect } from 'react-redux';
import Component from './Search';

export const mapStateToProps = (state) => ({
  results: state.search.results,
  keyword: state.search.keyword,
  hasSidebar: state.user.settings.dashboardsStyle === 'sidebar',
  dashboardsOpen: state.user.settings.pinned,
  newtab: state.user.settings.openLinksInNewTab,
  darkMode: state.user.settings.darkMode
});

const Container = connect(
  mapStateToProps
)(Component);

export default Container;
