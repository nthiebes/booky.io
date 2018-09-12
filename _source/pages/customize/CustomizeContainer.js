import { connect } from 'react-redux';
import Component from './Customize';

export const mapStateToProps = function(state) {
  return {
    headerColor: state.booky.headerColor
  };
};

const CustomizeContainer = connect(
  mapStateToProps
)(Component);

export default CustomizeContainer;
