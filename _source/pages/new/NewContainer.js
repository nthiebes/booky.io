import { connect } from 'react-redux';

import { updateSettings } from '../../_state/user/actions';
import Component from './New';

const mapStateToProps = (state) => ({
  newsVersion: state.user.settings.newsVersion
});
const mapDispatchToProps = {
  updateSettings
};
const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export default Container;
