import { ADD_CATEGORY, TOGGLE_CATEGORY } from './categoriesActions';

const initialState = [{
    id: '0',
    name: 'Category 1'
}, {
    id: '1',
    name: 'Category 2'
}, {
    id: '2',
    name: 'Category 3'
}];

    switch (action.type) {
        case ADD_CATEGORY:
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    expanded: true
                }
            ];
        case TOGGLE_CATEGORY:
            return state.map((category) => {
                if (category.id === action.id) {
                    return Object.assign({}, category, {
                        expanded: !category.expanded
                    });
                }
                return category;
            });
        default:
            return state;
    }

export default categories;
