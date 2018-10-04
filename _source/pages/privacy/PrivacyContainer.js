import { connect } from 'react-redux';
import Component from './Privacy';

export const mapStateToProps = function(state) {
  return {
    locale: state.intl.locale
  };
};

const Container = connect(
  mapStateToProps
)(Component);

export default Container;
