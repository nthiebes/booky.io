import { connect } from 'react-redux';

import { openModal } from '../../../_state/modal/actions';
import { updateSubscription } from '../../../_state/subscription/actions';
import Component from './AccountSupporter';

const mapStateToProps = (state) => ({
  isPremium: state.user.premium,
  supportAmount: state.user.supportAmount,
  supportExpires: state.user.supportExpires,
  supportStart: state.user.supportStart,
  language: state.intl.locale
});
const mapDispatchToProps = {
  openModal,
  updateSubscription
};
const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export default Container;
