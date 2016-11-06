import { connect } from 'react-redux';
import Sidebar from './Sidebar.jsx';
import {
    toggleNotes, 
    toggleAutofill, 
    toggleNewtab, 
    toggleStickyHeader, 
    toggleStickyToolbar, 
    updateGlobalColor, 
    updateHeaderColor, 
    closeSidebar
} from './sidebarActions';

export const mapStateToProps = function(state) {
    return {
        'open': state.sidebar.open,
        'notes': state.sidebar.notes,
        'autofill': state.sidebar.autofill,
        'newtab': state.sidebar.newtab,
        'stickyHeader': state.sidebar.stickyHeader,
        'stickyToolbar': state.sidebar.stickyToolbar,
        'globalColor': state.sidebar.globalColor,
        'headerColor': state.sidebar.headerColor
    };
};

export const mapDispatchToProps = function(dispatch) {
    return {
        'onNotesClick': () => {
            dispatch(toggleNotes());
        },
        'onAutofillClick': () => {
            dispatch(toggleAutofill());
        },
        'onNewtabClick': () => {
            dispatch(toggleNewtab());
        },
        'onStickyHeaderClick': () => {
            dispatch(toggleStickyHeader());
        },
        'onStickyToolbarClick': () => {
            dispatch(toggleStickyToolbar());
        },
        'onGlobalColorChange': (key) => {
            dispatch(updateGlobalColor(key));
        },
        'onHeaderColorChange': (key) => {
            dispatch(updateHeaderColor(key));
        },
        'onDoneClick': () => {
            dispatch(closeSidebar());
        }
    };
};

const SidebarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar);

export default SidebarContainer;
