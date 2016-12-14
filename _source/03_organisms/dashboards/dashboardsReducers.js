import { CHANGE_DASHBOARD } from './dashboardsActions';

const dashboards = (state = {}, action) => {

    // console.log('reducer', state, action);

    switch (action.type) {
        case CHANGE_DASHBOARD:
            return Object.assign({}, state, {
                'active': action.id
            });

        default:
            return state;
    }
};

export default dashboards;
