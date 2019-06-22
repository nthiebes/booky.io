import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, FormattedHTMLMessage, injectIntl } from 'react-intl';

import P from '../../../atoms/paragraph';
import { ButtonLargeBlue } from '../../../atoms/button';
import FileUpload from '../../../atoms/file-upload';

class AccountImport extends Component {
  render() {
    // const { intl } = this.props;

    return (
      <Fragment>
        <ol className="account__import-steps">
          <li className="account__import-step">
            <FormattedHTMLMessage id="account.importStep1" />
          </li>
          <li className="account__import-step">
            <FormattedMessage id="account.importStep2" />
            <FileUpload name="file" />
          </li>
          <li className="account__import-step">
            <FormattedMessage id="account.importStep3" />
          </li>
        </ol>
        <ButtonLargeBlue icon="upload" contentBefore disabled>
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
