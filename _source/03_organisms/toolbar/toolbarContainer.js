import { connect } from 'react-redux';
import Toolbar from './Toolbar.jsx';
import { toggleSearch, toggleEditMode } from './toolbarActions';

export const mapStateToProps = function(state) {
    return {
        'searchOpen': state.toolbar.searchOpen,
        'editMode': state.toolbar.editMode,
        'sticky': state.toolbar.sticky
    };
};

export const mapDispatchToProps = function(dispatch) {
    return {
        'onSearchClick': () => {
            dispatch(toggleSearch());
        },
        'onEditModeClick': () => {
            dispatch(toggleEditMode());
        }
    };
};

const ToolbarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Toolbar);

export default ToolbarContainer;
