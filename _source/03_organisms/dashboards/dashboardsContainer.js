import { connect } from 'react-redux';
import Dashboards from './Dashboards.jsx';
import { changeDashboard } from './dashboardsActions';

export const mapStateToProps = function(state) {
    return {
        'activePosition': state.sidebar.dashboard,
        'dashboards': state.dashboards.items,
        'activeDashboard': state.dashboards.active,
        'sidebarOpen': state.header.dashboardsOpen,
        'editMode': state.toolbar.editMode
    };
};

export const mapDispatchToProps = function(dispatch) {
    return {
        'onDashboardClick': (id) => {
            dispatch(changeDashboard(id));
        }
    };
};

const DashboardsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboards);

export default DashboardsContainer;
