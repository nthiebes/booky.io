import { connect } from 'react-redux';

import { searchBookmarks } from '../../_state/search/actions';
import Component from './SearchField';

export const mapStateToProps = (state) => ({
  darkMode: state.user.settings.darkMode
});

export const mapDispatchToProps = {
  searchBookmarks
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default Container;
