import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

import P from '../../../atoms/paragraph';
import { ButtonLargeBlue } from '../../../atoms/button';
import Input from '../../../atoms/input';

class AccountSupporter extends PureComponent {
  static propTypes = {
    intl: PropTypes.object.isRequired,
    openModal: PropTypes.func.isRequired,
    supportAmount: PropTypes.number,
    isPremium: PropTypes.bool,
    updateSubscription: PropTypes.func.isRequired,
    cancelSubscription: PropTypes.func.isRequired
  };

  state = {
    supportAmount: this.props.supportAmount || 2
  };

  handleOnChange = (value) => {
    this.setState({ supportAmount: Math.floor(value) });
  };

  handleUpdateClick = () => {
    const { supportAmount } = this.state;
    const { updateSubscription } = this.props;

    updateSubscription({
      supportAmount,
      onSuccess: (data) => {
        console.log('success', data);
      },
      onError: (error) => {
        console.log('error', error);
      }
    });
  };

  handleCancelClick = () => {
    const { cancelSubscription } = this.props;

    cancelSubscription({
      onSuccess: (data) => {
        console.log('success', data);
      },
      onError: (error) => {
        console.log('error', error);
      }
    });
  };

  render() {
    const { supportAmount } = this.state;
    const { isPremium } = this.props;

    return (
      <>
        {/* {isPremium ? ( */}
        <>
          <P first>
            <FormattedMessage id="Update your monthly amount." />
          </P>
          <Input
            value={supportAmount.toString()}
            type="number"
            onChange={this.handleOnChange}
            min="1"
          />
          <ButtonLargeBlue icon="save" onClick={this.handleUpdateClick}>
            <FormattedMessage
              id="supporter.update"
              values={{ b: (msg) => <b>{msg}</b> }}
            />
          </ButtonLargeBlue>
          <P>
            <FormattedMessage id="Cancel your booky supporter subscription." />
          </P>
          <ButtonLargeBlue icon="close" onClick={this.handleCancelClick}>
            <FormattedMessage
              id="supporter.cancel"
              values={{ b: (msg) => <b>{msg}</b> }}
            />
          </ButtonLargeBlue>
        </>
        {/* ) : ( */}
        <>
          <P>
            <FormattedMessage id="Select your monthly amount and subscribe." />
          </P>
          <Input
            value={supportAmount.toString()}
            type="number"
            onChange={this.handleOnChange}
            min="1"
          />
          <div id="paypal-button-container" />
        </>
        {/* )} */}
      </>
    );
  }
}

export default injectIntl(AccountSupporter);
