import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

import P from '../../../atoms/paragraph';
import { ButtonLargeBlue } from '../../../atoms/button';

class AccountSupporter extends PureComponent {
  static propTypes = {
    intl: PropTypes.object.isRequired,
    openModal: PropTypes.func.isRequired
  };

  handleClick = () => {
    // this.props.openModal('DeleteAccount');
  };

  render() {
    return (
      <>
        <P first>
          <FormattedMessage id="Update your monthly amount." />
        </P>
        <ButtonLargeBlue icon="save" contentBefore onClick={this.handleClick}>
          <FormattedMessage
            id="supporter.update"
            values={{ b: (msg) => <b>{msg}</b> }}
          />
        </ButtonLargeBlue>
        <P first>
          <FormattedMessage id="Cancel your booky supporter subscription." />
        </P>
        <ButtonLargeBlue icon="cross" contentBefore onClick={this.handleClick}>
          <FormattedMessage
            id="supporter.cancel"
            values={{ b: (msg) => <b>{msg}</b> }}
          />
        </ButtonLargeBlue>
      </>
    );
  }
}

export default injectIntl(AccountSupporter);
