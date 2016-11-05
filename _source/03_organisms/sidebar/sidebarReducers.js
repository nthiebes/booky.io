import {
    TOGGLE_SIDEBAR, 
    CLOSE_SIDEBAR, 
    TOGGLE_NOTES, 
    TOGGLE_AUTOFILL, 
    TOGGLE_NEWTAB, 
    TOGGLE_STICKY_HEADER, 
    TOGGLE_STICKY_TOOLBAR,
    UPDATE_GLOBAL_COLOR,
    UPDATE_HEADER_COLOR
} from './sidebarActions';

const sidebar = (state = {}, action) => {
    switch (action.type) {
        case TOGGLE_SIDEBAR:
            return Object.assign({}, state, {
                'open': !state.open
            });

        case CLOSE_SIDEBAR:
            return Object.assign({}, state, {
                'open': false
            });

        case TOGGLE_NOTES:
            return Object.assign({}, state, {
                'notes': !state.notes
            });

        case TOGGLE_AUTOFILL:
            return Object.assign({}, state, {
                'autofill': !state.autofill
            });

        case TOGGLE_NEWTAB:
            return Object.assign({}, state, {
                'newtab': !state.newtab
            });

        case TOGGLE_STICKY_HEADER:
            return Object.assign({}, state, {
                'stickyHeader': !state.stickyHeader
            });

        case TOGGLE_STICKY_TOOLBAR:
            return Object.assign({}, state, {
                'stickyToolbar': !state.stickyToolbar
            });

        case UPDATE_GLOBAL_COLOR:
            return Object.assign({}, state, {
                'globalColor': action.color
            });

        case UPDATE_HEADER_COLOR:
            return Object.assign({}, state, {
                'headerColor': action.color
            });

        default:
            return state;
    }
};

export default sidebar;
