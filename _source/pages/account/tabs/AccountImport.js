import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

import P from '../../../atoms/paragraph';

class AccountImport extends Component {
  render() {
    const { intl } = this.props;

    return (
      <P first>
        <FormattedMessage id="account.importText" />
      </P>
    );
  }
}

AccountImport.propTypes = {
  intl: PropTypes.object.isRequired
};

export default injectIntl(AccountImport);
