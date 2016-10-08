import { connect } from 'react-redux';
import Header from './Header.jsx';
import { toggleMainMenu } from './headerActions';

export const mapStateToProps = (state) => {
    return {
        menuMainOpen: state.header.menuMainOpen
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        onMainMenuClick: () => {
            dispatch(toggleMainMenu());
        }
    };
};

const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

export default HeaderContainer;