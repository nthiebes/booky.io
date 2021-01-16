import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import P from '../../../atoms/paragraph';
import { ButtonLargeBlue } from '../../../atoms/button';

export default class AccountManage extends Component {
  static propTypes = {
    intl: PropTypes.object.isRequired,
    openModal: PropTypes.func.isRequired
  }

  handleClick = () => {
    this.props.openModal('DeleteAccount');
  }

  render() {
    return (
      <>
        <P first>
          <FormattedMessage id="account.deleteText" />
        </P>
        <ButtonLargeBlue icon="delete" contentBefore onClick={ this.handleClick }>
          <FormattedMessage id="account.deleteButton" values={ { b: (msg) => <b>{msg}</b> } } />
        </ButtonLargeBlue>
      </>
    );
  }
}
