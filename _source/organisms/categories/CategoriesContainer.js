import { connect } from 'react-redux';
import Component from './Categories';

export const mapStateToProps = function(state) {
  return {
    categories: state.categories,
    editMode: state.toolbar.editMode,
    maxWidth: state.sidebar.maxWidth,
    dashboardsPosition: state.sidebar.dashboard
  };
};

const Container = connect(
  mapStateToProps
)(Component);

export default Container;
