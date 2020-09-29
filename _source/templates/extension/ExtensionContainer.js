import { connect } from 'react-redux';

import Component from './Extension';
import { updateExtensionData } from '../../_state/extension/actions';

const mapStateToProps = (state) => ({
  darkMode: state.user.settings.darkMode,
  color: state.user.settings.navigationBarColor
});
const mapDispatchToProps = {
  updateExtensionData
};
const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default Container;
