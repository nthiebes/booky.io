import { connect } from 'react-redux';
import Header from './Header.jsx';
import { toggleMainMenu, toggleEditMode } from './headerActions';

export const mapStateToProps = function(state) {
    return {
        'menuMainOpen': state.header.menuMainOpen,
        'editMode': state.header.editMode,
        'sticky': state.header.sticky,
        'color': state.header.color
    };
};

export const mapDispatchToProps = function(dispatch) {
    return {
        'onMainMenuClick': () => {
            dispatch(toggleMainMenu());
        },
        'onEditModeClick': () => {
            dispatch(toggleEditMode());
        }
    };
};

const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

export default HeaderContainer;
