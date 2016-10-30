import { TOGGLE_SIDEBAR, CLOSE_SIDEBAR } from './sidebarActions';

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

        default:
            return state;
    }
};

export default sidebar;
