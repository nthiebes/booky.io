import { connect } from 'react-redux';
import Component from './Booky';
import { dragDashboard } from '../../_state/dashboards/actions';
import { dragCategory } from '../../_state/categories-sorting/actions';
import { dragBookmark } from '../../_state/bookmarks/actions';
import { startDragging, stopDragging } from '../../_state/dragging/actions';

export const mapDispatchToProps = {
  dragDashboard,
  dragCategory,
  dragBookmark,
  startDragging,
  stopDragging
};

const Container = connect(
  null,
  mapDispatchToProps
)(Component);

export default Container;
