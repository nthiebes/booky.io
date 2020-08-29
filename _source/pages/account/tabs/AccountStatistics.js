import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

import Empty from '../../../molecules/empty';

class AccountStatistics extends Component {
  render() {
    return (
      <Empty illustration="empty">
        <FormattedMessage id="misc.comingSoon" />
      </Empty>
    );
  }
}

AccountStatistics.propTypes = {
  intl: PropTypes.object.isRequired
};

export default injectIntl(AccountStatistics);
