import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { FormattedHTMLMessage, injectIntl } from 'react-intl';

import P from '../../../atoms/paragraph';
import { ButtonLargeBlue } from '../../../atoms/button';

class AccountExport extends Component {
  render() {
    const { intl } = this.props;

    return (
      <Fragment>
        <P first>
          <FormattedHTMLMessage id="account.exportText" />
        </P>
        <ButtonLargeBlue icon="download" contentBefore>
          <FormattedHTMLMessage id="account.startDownload" />
        </ButtonLargeBlue>
      </Fragment>
    );
  }
}

AccountExport.propTypes = {
  intl: PropTypes.object.isRequired
};

export default injectIntl(AccountExport);
