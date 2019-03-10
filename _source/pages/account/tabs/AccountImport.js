import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

import P from '../../../atoms/paragraph';
import { ButtonLargeBlue } from '../../../atoms/button';
import FileUpload from '../../../atoms/file-upload';

class AccountImport extends Component {
  render() {
    const { intl } = this.props;

    return (
      <Fragment>
        <P first>
          <FormattedMessage id="account.importText" />
        </P>
        <FileUpload />
        <ButtonLargeBlue icon="upload" contentBefore>
          <FormattedMessage id="account.startImport" />
        </ButtonLargeBlue>
      </Fragment>
    );
  }
}

AccountImport.propTypes = {
  intl: PropTypes.object.isRequired
};

export default injectIntl(AccountImport);
