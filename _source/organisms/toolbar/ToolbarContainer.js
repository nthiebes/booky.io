import { connect } from 'react-redux';
import Component from './Toolbar';
import { updateCurrentlySticky } from '../../_state/toolbar/actions';
import { openModal } from '../../_state/modal/actions';
import { changeDashboard } from '../../_state/dashboards/actions';

export const mapStateToProps = (state) => ({
  currentlySticky: state.toolbar.currentlySticky,
  headerSticky: state.user.settings.stickyHeader,
  sticky: state.user.settings.stickyToolbar,
  dashboards: state.dashboards,
  activeDashboard: state.dashboards.items.find((dashboard) => dashboard.id === state.user.settings.defaultDashboardId),
  dashboardsStyle: state.user.settings.dashboardsStyle,
  darkMode: state.user.settings.darkMode
});

export const mapDispatchToProps = {
  updateCurrentlySticky,
  openModal,
  changeDashboard
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default Container;
