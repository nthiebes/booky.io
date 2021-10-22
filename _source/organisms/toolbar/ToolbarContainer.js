import { connect } from 'react-redux';
import Component from './Toolbar';
import { openModal } from '../../_state/modal/actions';

export const mapStateToProps = (state) => ({
  currentlySticky: state.toolbar.currentlySticky,
  headerSticky: state.user.settings.stickyHeader,
  sticky: state.user.settings.stickyToolbar,
  activeDashboardName: (
    state.dashboards.items.find(
      (dashboard) => dashboard.id === state.user.settings.defaultDashboardId
    ) || {}
  ).name,
  isActiveDashboardPublic: (
    state.dashboards.items.find(
      (dashboard) => dashboard.id === state.user.settings.defaultDashboardId
    ) || {}
  ).public,
  activeDashboardId: state.user.settings.defaultDashboardId,
  dashboardsStyle: state.user.settings.dashboardsStyle,
  darkMode: state.user.settings.darkMode,
  isPremium: state.user.premium,
  categoriesPending: state.dashboards.pending,
  hasDashboards: (state.dashboards.items || []).length > 0
});

export const mapDispatchToProps = {
  openModal
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export default Container;
