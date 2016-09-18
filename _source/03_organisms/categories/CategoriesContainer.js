import { connect } from 'react-redux';
import Categories from './Categories.jsx';

const mapStateToProps = (state) => {
    return {
        categories: state.categories
    };
};

const CategoriesContainer = connect(
    mapStateToProps
)(Categories);

export default CategoriesContainer;