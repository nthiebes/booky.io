import { connect } from 'react-redux';
import Categories from './Categories.jsx';

export const mapStateToProps = function(state) {
    return {
        'categories': state.categories,
        'editMode': state.toolbar.editMode,
        'maxWidth': state.sidebar.maxWidth
    };
};

const CategoriesContainer = connect(
    mapStateToProps
)(Categories);

export default CategoriesContainer;
