import { connect } from 'react-redux';
import Header from './component.jsx';
import { toggleMainMenu, closeMainMenu, toggleDashboards, closeDashboards } from './actions';
import { toggleSidebar, closeSidebar } from '../sidebar/sidebarActions';

export const mapStateToProps = function(state) {
    return {
        'menuMainOpen': state.header.menuMainOpen,
        'sidebarOpen': state.sidebar.open,
        'dashboardsOpen': state.header.dashboardsOpen,
        'sticky': state.sidebar.stickyHeader,
        'color': state.sidebar.headerColor
    };
};

export const mapDispatchToProps = function(dispatch) {
    return {
        'onMenuMainClick': () => {
            dispatch(toggleMainMenu());
            dispatch(closeSidebar());
            dispatch(closeDashboards());
        },
        'onSidebarClick': () => {
            dispatch(toggleSidebar());
            dispatch(closeMainMenu());
            dispatch(closeDashboards());
        },
        'onDashboardsClick': () => {
            dispatch(toggleDashboards());
            dispatch(closeSidebar());
            dispatch(closeMainMenu());
        },
        'onHeaderClick': () => {
            dispatch(closeMainMenu());
            dispatch(closeSidebar());
            dispatch(closeDashboards());
        }
    };
};

const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

export default HeaderContainer;
