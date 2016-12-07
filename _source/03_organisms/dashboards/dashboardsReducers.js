import { TOGGLE_DASHBOARDS } from './dashboardsActions';

const dashboards = (state = {}, action) => {
    switch (action.type) {
        case TOGGLE_DASHBOARDS:
            return Object.assign({}, state, {
                'open': !state.open
            });

        default:
            return state;
    }
};

export default dashboards;
