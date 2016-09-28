import { TOGGLE_SEARCH } from './toolbarActions';

const toolbar = (state = {}, action) => {
    switch (action.type) {
        case TOGGLE_SEARCH:
            return Object.assign({}, state, {
                searchOpen: !state.searchOpen
            });

        default:
            return state;
    }
};

export default toolbar;