import { connect } from 'react-redux';
import Component from './Donate';

const mapStateToProps = (state) => ({
  locale: state.intl.locale
});
const Container = connect(mapStateToProps)(Component);

export default Container;
