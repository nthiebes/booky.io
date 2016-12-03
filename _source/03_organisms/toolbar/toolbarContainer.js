import { connect } from 'react-redux';
import Toolbar from './Toolbar.jsx';
import { toggleSearch, toggleEditMode, updateCurrentlySticky } from './toolbarActions';

export const mapStateToProps = function(state) {
    return {
        'currentlySticky': state.toolbar.currentlySticky,
        'editMode': state.toolbar.editMode,
        'headerSticky': state.sidebar.stickyHeader,
        'searchFocused': state.toolbar.searchFocused,
        'searchOpen': state.toolbar.searchOpen,
        'sticky': state.sidebar.stickyToolbar
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
        'updateCurrentlySticky': (sticky) => {
            dispatch(updateCurrentlySticky(sticky));
        }
    };
};

const ToolbarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Toolbar);

export default ToolbarContainer;
