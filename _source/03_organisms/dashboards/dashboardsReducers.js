import { CHANGE_DASHBOARD, UPDATE_OFFSET } from './dashboardsActions';

const dashboards = (state = {}, action) => {

    switch (action.type) {
        case CHANGE_DASHBOARD:
            return Object.assign({}, state, {
                'active': action.id
            });

        case UPDATE_OFFSET:
            return Object.assign({}, state, {
                'offset': action.offset
            });

        default:
            return state;
    }
};

export default dashboards;
