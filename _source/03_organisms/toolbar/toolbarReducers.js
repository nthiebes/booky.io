import { TOGGLE_SEARCH, TOGGLE_EDIT_MODE } from './toolbarActions';

const toolbar = (state = {}, action) => {
    switch (action.type) {
        case TOGGLE_SEARCH:
            return Object.assign({}, state, {
                'searchOpen': !state.searchOpen,
                'searchFocused': state.searchOpen === false
            });

        case TOGGLE_EDIT_MODE:
            return Object.assign({}, state, {
                'editMode': !state.editMode,
                'searchFocused': false
            });

        default:
            return state;
    }
};

export default toolbar;
