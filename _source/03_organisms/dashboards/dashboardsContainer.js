import { connect } from 'react-redux';
import Dashboards from './Dashboards.jsx';
import { toggleDashboards } from './dashboardsActions';

export const mapStateToProps = function(state) {
    return {
        'activePosition': state.sidebar.dashboard
    };
};

export const mapDispatchToProps = function(dispatch) {
    return {
        'onDashboardsClick': () => {
            dispatch(toggleDashboards());
        }
    };
};

const DashboardsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboards);

export default DashboardsContainer;
