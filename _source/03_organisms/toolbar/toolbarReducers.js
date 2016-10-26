import { TOGGLE_SEARCH, TOGGLE_EDIT_MODE } from './toolbarActions';

const toolbar = (state = {}, action) => {
    switch (action.type) {
        case TOGGLE_SEARCH:
            return Object.assign({}, state, {
                'searchOpen': !state.searchOpen
            });

        case TOGGLE_EDIT_MODE:
            return Object.assign({}, state, {
                'editMode': !state.editMode
            });

        default:
            return state;
    }
};

export default toolbar;
