import { connect } from 'react-redux';

import Component from './Home';
import { getDashboards } from '../../_state/dashboards/actions';
import { searchBookmarks, updateSearchData } from '../../_state/search/actions';

const mapStateToProps = (state) => ({
  loggedIn: state.user.loggedIn,
  blurContent: state.modal.open && state.user.settings.blurEffect,
  hasSidebar: state.user.settings.dashboardsStyle === 'sidebar',
  dashboardsOpen: state.user.settings.pinned,
  keywordExists: state.search.total !== null || state.search.pending,
  language: state.intl.locale,
  darkMode: state.user.settings.darkMode
});
const mapDispatchToProps = {
  getDashboards,
  searchBookmarks,
  updateSearchData
};
const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export default HomeContainer;
