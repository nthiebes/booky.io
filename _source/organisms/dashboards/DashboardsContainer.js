import { connect } from 'react-redux';
import Component from './Dashboards';
import { actions as modalActions } from '../../_state/modal';
import { actions as dashboardsActions } from '../../_state/dashboards';
import { actions as sidebarActions } from '../../_state/sidebar';
import { updateSettings } from '../../_state/user/actions';
import { getCategories } from '../../_state/categories/actions';

export const mapStateToProps = (state) => ({
  dashboards: state.dashboards.items,
  activeId: state.dashboards.active,
  pinned: state.user.settings.pinned,
  currentlySticky: state.toolbar.currentlySticky,
  headerSticky: state.user.settings.stickyHeader,
  toolbarSticky: state.user.settings.stickyToolbar,
  darkMode: state.user.settings.darkMode
});

export const mapDispatchToProps = (dispatch) => ({
  openModal: (modal, data) => {
    dispatch(modalActions.openModal(modal, data));
  },
  changeDashboard: (id) => {
    dispatch(dashboardsActions.changeDashboard(id));
    dispatch(sidebarActions.closeSidebar());
    dispatch(getCategories(id));
  },
  toggleDashboardPinned: (pinned) => {
    dispatch(updateSettings({
      pinned
    }));
  }
});

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default Container;
