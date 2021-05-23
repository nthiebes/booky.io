import { connect } from 'react-redux';

import Component from './DashboardsList';
import { openModal } from '../../../_state/modal/actions';
import { changeDashboard } from '../../../_state/dashboards/actions';
import { closeSidebar } from '../../../_state/sidebar/actions';

const mapStateToProps = (state) => ({
  dashboards: state.dashboards.items || [],
  activeId: state.user.settings.defaultDashboardId,
  pinned: state.user.settings.pinned,
  darkMode: state.user.settings.darkMode,
  closeEditMode: state.user.settings.closeEditMode,
  isDragging: state.dragging.isDragging,
  minimalBookmarkButton: state.user.settings.minimalBookmarkButton
});
const mapDispatchToProps = {
  openModal,
  changeDashboard,
  closeSidebar
};
const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export default Container;
