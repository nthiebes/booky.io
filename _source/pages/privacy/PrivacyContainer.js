import { connect } from 'react-redux';
import Component from './Privacy';

export const mapStateToProps = (state) => ({
  locale: state.intl.locale
});

const Container = connect(mapStateToProps)(Component);

export default Container;
