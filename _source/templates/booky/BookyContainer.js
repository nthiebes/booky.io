import { connect } from 'react-redux';
import Component from './Booky';
import { dragDashboard } from '../../_state/dashboards/actions';
import { dragCategory } from '../../_state/categories-sorting/actions';
import { dragBookmark } from '../../_state/bookmarks/actions';
import { startDragging, stopDragging } from '../../_state/dragging/actions';
import { updateUserData } from '../../_state/user/actions';
import { openModal } from '../../_state/modal/actions';

const mapStateToProps = (state) => ({
  isMobile: state.user.isMobile
});
const mapDispatchToProps = {
  dragDashboard,
  dragCategory,
  dragBookmark,
  startDragging,
  stopDragging,
  updateUserData,
  openModal
};
const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export default Container;
