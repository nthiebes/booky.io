import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

import P from '../../../atoms/paragraph';
import { H2 } from '../../../atoms/headline';
import { ButtonSmallPrimary } from '../../../atoms/button';
import Input from '../../../atoms/input';
import Label from '../../../atoms/label';
import { ErrorMessage, SuccessMessage } from '../../../atoms/messages';
import Form from '../../../molecules/form';

class AccountSupporter extends PureComponent {
  static propTypes = {
    intl: PropTypes.object.isRequired,
    openModal: PropTypes.func.isRequired,
    supportAmount: PropTypes.number,
    supportExpires: PropTypes.string,
    supportStart: PropTypes.string,
    isPremium: PropTypes.bool,
    updateSubscription: PropTypes.func.isRequired
  };

  state = {
    newSupportAmount: this.props.supportAmount,
    supportAmount: this.props.supportAmount,
    updatePending: false,
    updateSuccess: false,
    updateError: null,
    cancelError: null
  };

  handleOnChange = (value) => {
    this.setState({ newSupportAmount: Math.floor(value) });
  };

  handleUpdateClick = () => {
    const { newSupportAmount } = this.state;
    const { updateSubscription } = this.props;

    this.setState({
      updateError: null,
      updatePending: true,
      updateSuccess: false
    });

    updateSubscription({
      supportAmount: newSupportAmount,
      onSuccess: () => {
        this.setState({
          updatePending: false,
          updateSuccess: true,
          supportAmount: newSupportAmount
        });
      },
      onError: (error) => {
        this.setState({ updateError: error, updatePending: false });
      }
    });
  };

  handleCancelClick = () => {
    this.props.openModal('CancelSubscription', {
      date: 'DATE'
    });
  };

  render() {
    const {
      updateError,
      updatePending,
      supportAmount,
      newSupportAmount,
      updateSuccess
    } = this.state;
    const { intl, supportExpires, isPremium } = this.props;

    return (
      <>
        {isPremium ? (
          <>
            <H2>
              <FormattedMessage id="account.overview" />
            </H2>
            <P noPadding className="account__overview">
              <FormattedMessage id="account.yourMembership" />
              <b className="account__overview-value">
                {supportExpires ? (
                  <FormattedMessage id="account.supporterCanceled" />
                ) : (
                  <FormattedMessage id="account.supporter" />
                )}
              </b>
            </P>
            <P noPadding className="account__overview">
              <FormattedMessage id="account.yourAmount" />
              <b className="account__overview-value">
                {supportExpires ? '-' : `${supportAmount} €`}
              </b>
            </P>
            {supportExpires && (
              <P className="account__overview">
                <FormattedMessage id="Verfügbar bis:" />
                <b className="account__overview-value">{supportExpires}</b>
              </P>
            )}

            {!supportExpires && (
              <Form>
                <H2>
                  <FormattedMessage id="account.updateSupporter" />
                </H2>
                <Label first htmlFor="amount">
                  <FormattedMessage id="account.newAmount" />
                </Label>
                <div className="account__amount-wrapper">
                  <Input
                    id="amount"
                    value={newSupportAmount.toString()}
                    type="number"
                    onChange={this.handleOnChange}
                    min="1"
                    required
                    placeholder={intl.formatMessage({
                      id: 'upsell.placeholder'
                    })}
                    disabled={updatePending}
                    className="account__amount"
                  />
                  <P size="large" className="account__euro" noPadding>
                    {'€'}
                  </P>
                  <ButtonSmallPrimary
                    icon="save"
                    onClick={this.handleUpdateClick}
                    pending={updatePending}
                    disabled={newSupportAmount <= 0 || updatePending}
                    className="account__update"
                  >
                    <FormattedMessage
                      id="account.updateAmount"
                      values={{ b: (msg) => <b>{msg}</b> }}
                    />
                  </ButtonSmallPrimary>
                </div>
                {updateSuccess && (
                  <SuccessMessage
                    className="account__message"
                    message="account.updateSuccess"
                    hasIcon
                  />
                )}
                {updateError && (
                  <ErrorMessage
                    className="account__message"
                    message={updateError}
                    hasIcon
                  />
                )}
              </Form>
            )}

            {supportExpires ? (
              <>
                <H2>
                  <FormattedMessage id="misc.supporterMembership" />
                </H2>
                <P>
                  <FormattedMessage
                    id="modal.cancelText"
                    values={{ date: <b>{supportExpires}</b> }}
                  />
                </P>
                <ButtonSmallPrimary to="/upsell" icon="membership">
                  <FormattedMessage
                    id="button.supporter"
                    values={{ b: (msg) => <b>{msg}</b> }}
                  />
                </ButtonSmallPrimary>
              </>
            ) : (
              <>
                <H2>
                  <FormattedMessage id="account.cancelTitle" />
                </H2>
                <P>
                  <FormattedMessage
                    id="account.cancelText"
                    values={{ date: <b>{'DATE'}</b> }}
                  />
                </P>
                <ButtonSmallPrimary
                  icon="close"
                  onClick={this.handleCancelClick}
                >
                  <FormattedMessage
                    id="account.cancelButton"
                    values={{ b: (msg) => <b>{msg}</b> }}
                  />
                </ButtonSmallPrimary>
              </>
            )}
          </>
        ) : (
          <>
            <H2>
              <FormattedMessage id="account.overview" />
            </H2>
            <P noPadding className="account__overview">
              <FormattedMessage id="account.yourMembership" />
              <b className="account__overview-value">
                <FormattedMessage id="account.member" />
              </b>
            </P>
            <H2>
              <FormattedMessage id="misc.supporterMembership" />
            </H2>
            <P>
              <FormattedMessage id="account.learnMore" />
            </P>
            <ButtonSmallPrimary to="/supporter" icon="membership">
              <FormattedMessage
                id="account.discover"
                values={{ b: (msg) => <b>{msg}</b> }}
              />
            </ButtonSmallPrimary>
          </>
        )}
      </>
    );
  }
}

export default injectIntl(AccountSupporter);
