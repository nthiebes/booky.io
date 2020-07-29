import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

// import P from '../../../atoms/paragraph';
// import { ButtonLargeBlue } from '../../../atoms/button';
import Empty from '../../../molecules/empty';

class AccountExport extends Component {
  render() {
    // const { intl } = this.props;

    return (
      <Empty illustration="monitor-window">
        <FormattedMessage id="misc.comingSoon" />
      </Empty>
    );
  }
}

AccountExport.propTypes = {
  intl: PropTypes.object.isRequired
};

export default injectIntl(AccountExport);

/*
<Fragment>
  <P first>
    <FormattedMessage id="account.exportText" />
  </P>
  <ButtonLargeBlue icon="download" contentBefore>
    <FormattedMessage id="account.export" values={ { b: (msg) => <b>{msg}</b> } } />
  </ButtonLargeBlue>
</Fragment>
*/
