import { connect } from 'react-redux';
import Booky from './Booky.jsx';

export const mapStateToProps = function(state) {
    return {
        'loggedIn': state.booky.loggedIn
    };
};

const BookyContainer = connect(
    mapStateToProps
)(Booky);

export default BookyContainer;
