import { connect } from 'react-redux';
import Component from './Booky';
import { dragDashboard, dragCategory } from '../../_state/dashboards/actions';
import { dragBookmark } from '../../_state/bookmarks/actions';

export const mapDispatchToProps = {
  dragDashboard,
  dragCategory,
  dragBookmark
};

const Container = connect(
  null,
  mapDispatchToProps
)(Component);

export default Container;
