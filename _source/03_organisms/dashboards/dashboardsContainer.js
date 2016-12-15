import { connect } from 'react-redux';
import Dashboards from './Dashboards.jsx';
import { changeDashboard, updateOffset } from './dashboardsActions';

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
            dispatch(changeDashboard(id));
        },
        'updateOffset': (offset) => {
            dispatch(updateOffset(offset));
        }
    };
};

const DashboardsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboards);

export default DashboardsContainer;
