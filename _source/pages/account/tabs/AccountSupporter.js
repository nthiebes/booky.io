import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

import P from '../../../atoms/paragraph';
import { ButtonLargeBlue } from '../../../atoms/button';
import Input from '../../../atoms/input';
import { ErrorMessage, SuccessIllustration } from '../../../atoms/messages';

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
    supportAmount: this.props.supportAmount,
    error: null
  };

  handleOnChange = (value) => {
    this.setState({ supportAmount: Math.floor(value) });
  };

  handleUpdateClick = () => {
    const { supportAmount } = this.state;
    const { updateSubscription } = this.props;

    this.setState({ error: null });

    updateSubscription({
      supportAmount,
      onSuccess: (data) => {
        console.log('success', data);
      },
      onError: (error) => {
        console.log('error', error);
        this.setState({ error: error });
      }
    });
  };

  handleCancelClick = () => {
    const { cancelSubscription } = this.props;

    this.setState({ error: null });

    cancelSubscription({
      onSuccess: (data) => {
        console.log('success', data);
      },
      onError: (error) => {
        console.log('error', error);
        this.setState({ error: error });
      }
    });
  };

  render() {
    const { supportAmount, error } = this.state;
    const { isPremium } = this.props;

    return (
      <>
        {true ? (
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
            <ButtonLargeBlue
              icon="save"
              onClick={this.handleUpdateClick}
              disabled={supportAmount <= 0}
            >
              <FormattedMessage
                id="supporter.update"
                values={{ b: (msg) => <b>{msg}</b> }}
              />
            </ButtonLargeBlue>
            {error && <ErrorMessage message={error} hasIcon />}
            <P>
              <FormattedMessage id="Cancel your booky supporter subscription." />
            </P>
            <ButtonLargeBlue icon="close" onClick={this.handleCancelClick}>
              <FormattedMessage
                id="supporter.cancel"
                values={{ b: (msg) => <b>{msg}</b> }}
              />
            </ButtonLargeBlue>
            {error && <ErrorMessage message={error} hasIcon />}
          </>
        ) : (
          <>{'dies das'}</>
        )}
      </>
    );
  }
}

export default injectIntl(AccountSupporter);
