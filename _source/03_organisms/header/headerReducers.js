import { TOGGLE_MAIN_MENU, CLOSE_MAIN_MENU } from './headerActions';

const headerReducers = (state = {}, action) => {
    switch (action.type) {
        case TOGGLE_MAIN_MENU:
            return Object.assign({}, state, {
                'menuMainOpen': !state.menuMainOpen
            });

        case CLOSE_MAIN_MENU:
            return Object.assign({}, state, {
                'menuMainOpen': false
            });

        default:
            return state;
    }
};

export default headerReducers;
