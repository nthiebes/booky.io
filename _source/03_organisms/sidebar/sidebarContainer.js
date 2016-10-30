import { connect } from 'react-redux';
import Sidebar from './Sidebar.jsx';

export const mapStateToProps = function(state) {
    return {
        'open': state.sidebar.open
    };
};

const SidebarContainer = connect(
    mapStateToProps
)(Sidebar);

export default SidebarContainer;
