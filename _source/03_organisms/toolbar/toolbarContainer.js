import { connect } from 'react-redux';
import Toolbar from './Toolbar.jsx';
import { toggleSearch } from './toolbarActions';

export const mapStateToProps = (state) => {
    return {
        searchOpen: state.toolbar.searchOpen
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        onSearchClick: () => {
            dispatch(toggleSearch());
        }
    };
};

const ToolbarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Toolbar);

export default ToolbarContainer;