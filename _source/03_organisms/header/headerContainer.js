import { connect } from 'react-redux';
import Header from './Header.jsx';
import { toggleMainMenu, closeMainMenu } from './headerActions';
import { toggleSidebar, closeSidebar } from '../sidebar/sidebarActions';

export const mapStateToProps = function(state) {
    return {
        'menuMainOpen': state.header.menuMainOpen,
        'sidebarOpen': state.sidebar.open,
        'sticky': state.sidebar.stickyHeader,
        'color': state.sidebar.headerColor
    };
};

export const mapDispatchToProps = function(dispatch) {
    return {
        'onMenuMainClick': () => {
            dispatch(toggleMainMenu());
            dispatch(closeSidebar());
        },
        'onSidebarClick': () => {
            dispatch(toggleSidebar());
            dispatch(closeMainMenu());
        },
        'onHeaderClick': () => {
            dispatch(closeMainMenu());
            dispatch(closeSidebar());
        }
    };
};

const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

export default HeaderContainer;
