import { connect } from 'react-redux';

import { importBookmarks } from '../../../_state/user/actions';
import Component from './AccountImport';

const mapDispatchToProps = {
  importBookmarks
};
const Container = connect(null, mapDispatchToProps)(Component);

export default Container;
