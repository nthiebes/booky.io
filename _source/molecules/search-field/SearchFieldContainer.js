import { connect } from 'react-redux';

import { searchBookmarks, resetSearch, updateSearchData } from '../../_state/search/actions';
import Component from './SearchField';

export const mapStateToProps = (state) => ({
  darkMode: state.user.settings.darkMode,
  keyword: state.search.keyword,
  dashboardsPending: state.dashboards.pending
});

export const mapDispatchToProps = {
  searchBookmarks,
  resetSearch,
  updateSearchData
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default Container;
