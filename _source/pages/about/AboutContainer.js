import { connect } from 'react-redux';
import Component from './About';

const mapStateToProps = (state) => ({
  locale: state.intl.locale
});
const Container = connect(
  mapStateToProps
)(Component);

export default Container;
