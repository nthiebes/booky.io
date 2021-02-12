import { connect } from 'react-redux';
import Component from './Menu';

const mapStateToProps = (state) => ({
  isBeta: state.user.isBeta,
  newsVersion: state.user.settings.newsVersion
});
const Container = connect(mapStateToProps)(Component);

export default Container;
