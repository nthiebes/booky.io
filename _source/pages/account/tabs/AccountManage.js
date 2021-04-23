import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import P from '../../../atoms/paragraph';
import Input from '../../../atoms/input';
import { H2 } from '../../../atoms/headline';
import { ButtonLargeBlue } from '../../../atoms/button';

export default class AccountManage extends Component {
  static propTypes = {
    intl: PropTypes.object.isRequired,
    openModal: PropTypes.func.isRequired
  };

  handleClick = () => {
    this.props.openModal('DeleteAccount');
  };

  render() {
    return (
      <>
        <H2>
          <FormattedMessage id="Supporter Mitgliedschaft" />
        </H2>
        <Input
          value="2"
          type="number"
          onChange={this.handleOnChange}
          min="1"
          label="Dein monatlicher Betrag"
        />
        <ButtonLargeBlue icon="delete" contentBefore>
          <FormattedMessage id="Betrag anpassen" />
        </ButtonLargeBlue>
        <ButtonLargeBlue icon="delete" contentBefore>
          <FormattedMessage id="Abonnement beenden" />
        </ButtonLargeBlue>
        <H2>
          <FormattedMessage id="Account" />
        </H2>
        <P first>
          <FormattedMessage id="account.deleteText" />
        </P>
        <ButtonLargeBlue icon="delete" onClick={this.handleClick}>
          <FormattedMessage
            id="account.deleteButton"
            values={{ b: (msg) => <b>{msg}</b> }}
          />
        </ButtonLargeBlue>
      </>
    );
  }
}
