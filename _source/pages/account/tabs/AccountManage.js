import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, FormattedHTMLMessage, injectIntl } from 'react-intl';

import P from '../../../atoms/paragraph';
import { ButtonLargeBlue } from '../../../atoms/button';

class AccountManage extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.openModal('DeleteAccount');
  }

  render() {
    // const { intl } = this.props;

    return (
      <Fragment>
        <P first>
          <FormattedMessage id="account.deleteText" />
        </P>
        <ButtonLargeBlue icon="delete" contentBefore onClick={ this.handleClick }>
          <FormattedHTMLMessage id="account.deleteButton" />
        </ButtonLargeBlue>
      </Fragment>
    );
  }
}

AccountManage.propTypes = {
  intl: PropTypes.object.isRequired,
  openModal: PropTypes.func.isRequired
};

export default injectIntl(AccountManage);
