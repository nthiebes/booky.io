import { connect } from 'react-redux';
import Component from './AccountTools';

import {
  findDuplicates,
  resetDuplicates
} from '../../../_state/duplicates/actions';

const mapStateToProps = (state) => ({
  isPremium: state.user.premium,
  pending: state.duplicates.pending,
  showResults: state.duplicates.pending || state.duplicates.total !== null
});
const mapDispatchToProps = {
  findDuplicates,
  resetDuplicates
};
const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export default Container;
