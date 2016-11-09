import { connect } from 'react-redux';
import Toolbar from './Toolbar.jsx';
import { toggleSearch, toggleEditMode, updateSticky } from './toolbarActions';

export const mapStateToProps = function(state) {
    return {
        'searchOpen': state.toolbar.searchOpen,
        'searchFocused': state.toolbar.searchFocused,
        'editMode': state.toolbar.editMode,
        'sticky': state.sidebar.stickyToolbar,
        'headerSticky': state.sidebar.stickyHeader,
        'currentlySticky': state.toolbar.currentlySticky
    };
};

export const mapDispatchToProps = function(dispatch) {
    return {
        'onSearchClick': () => {
            dispatch(toggleSearch());
        },
        'onEditModeClick': () => {
            dispatch(toggleEditMode());
        },
        'updateSticky': (sticky) => {
            dispatch(updateSticky(sticky));
        }
    };
};

const ToolbarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Toolbar);

export default ToolbarContainer;
