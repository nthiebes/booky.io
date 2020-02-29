import { connect } from 'react-redux';

import { searchBookmarks } from '../../_state/search/actions';
import Component from './Search';

export const mapStateToProps = (state) => ({
  darkMode: state.user.settings.darkMode,
  keyword: state.search.keyword
});

export const mapDispatchToProps = {
  searchBookmarks
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default Container;
