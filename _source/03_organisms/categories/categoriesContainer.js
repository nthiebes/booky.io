import { connect } from 'react-redux';
import Categories from './Categories.jsx';

export const mapStateToProps = function(state) {
    return {
        'categories': state.categories
    };
};

const CategoriesContainer = connect(
    mapStateToProps
)(Categories);

export default CategoriesContainer;
