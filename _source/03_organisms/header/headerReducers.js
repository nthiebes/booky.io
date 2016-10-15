import { TOGGLE_MAIN_MENU, TOGGLE_EDIT_MODE } from './headerActions';

const header = (state = {}, action) => {
    switch (action.type) {
        case TOGGLE_MAIN_MENU:
            return Object.assign({}, state, {
                'menuMainOpen': !state.menuMainOpen
            });

        case TOGGLE_EDIT_MODE:
            return Object.assign({}, state, {
                'editMode': !state.editMode
            });

        default:
            return state;
    }
};

export default header;
