import { connect } from 'react-redux';
import Header from './Header.jsx';
import { toggleMainMenu, closeMainMenu } from './headerActions';

export const mapStateToProps = function(state) {
    return {
        'menuMainOpen': state.header.menuMainOpen,
        'sticky': state.header.sticky,
        'color': state.header.color
    };
};

export const mapDispatchToProps = function(dispatch) {
    return {
        'onMainMenuClick': () => {
            dispatch(toggleMainMenu());
        },
        'onHeaderClick': () => {
            dispatch(closeMainMenu());
        }
    };
};

const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

export default HeaderContainer;
