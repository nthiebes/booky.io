import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

// import { ButtonLargeBlue } from '../../../atoms/button';
// import FileUpload from '../../../atoms/file-upload';
import Empty from '../../../molecules/empty';

class AccountImport extends Component {
  render() {
    // const { intl } = this.props;

    return (
      <Empty illustration="monitor-window">
        <FormattedMessage id="misc.comingSoon" />
      </Empty>
    );
  }
}

AccountImport.propTypes = {
  intl: PropTypes.object.isRequired
};

export default injectIntl(AccountImport);

/*
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
    <FormattedMessage id="account.import" />
  </ButtonLargeBlue>
</Fragment>
*/
