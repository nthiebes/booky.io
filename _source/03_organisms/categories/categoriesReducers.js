import { ADD_CATEGORY, TOGGLE_CATEGORY } from './categoriesActions';

const categories = (state = [], action) => {
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
};

export default categories;
