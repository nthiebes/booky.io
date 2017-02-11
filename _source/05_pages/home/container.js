import { connect } from 'react-redux';
import Home from './component.jsx';

export const mapStateToProps = function(state) {
    return {
        'loggedIn': state.booky.loggedIn
    };
};

const HomeContainer = connect(
    mapStateToProps
)(Home);

export default HomeContainer;
