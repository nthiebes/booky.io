import { connect } from 'react-redux';
import Component from './component.jsx';
import { actions as dashboardsActions } from '../../_state/dashboards';

export const mapStateToProps = function(state) {
  return {
    'activePosition': state.sidebar.dashboard,
    'dashboards': state.dashboards.items,
    'activeDashboard': state.dashboards.active,
    'sidebarOpen': state.header.dashboardsOpen,
    'editMode': state.toolbar.editMode,
    'headerSticky': state.sidebar.stickyHeader,
    'toolbarSticky': state.sidebar.stickyToolbar,
    'offset': state.dashboards.offset
  };
};

export const mapDispatchToProps = function(dispatch) {
  return {
    'onDashboardClick': (id) => {
      dispatch(dashboardsActions.changeDashboard(id));
    },
    'updateOffset': (offset) => {
      dispatch(dashboardsActions.updateOffset(offset));
    }
  };
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default Container;
