import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

import P from '../../../atoms/paragraph';
import { H2 } from '../../../atoms/headline';
import { ButtonSmallPrimary, ButtonSmallBlue } from '../../../atoms/button';
import Input from '../../../atoms/input';
import Label from '../../../atoms/label';
import { ErrorMessage, SuccessMessage } from '../../../atoms/messages';
import Form from '../../../molecules/form';
import Link from '../../../atoms/link/Link';

const addMonths = (date, months) => {
  const d = date.getDate();

  date.setMonth(date.getMonth() + Number(months));
  if (date.getDate() !== d) {
    date.setDate(0);
  }
  return date;
};

class AccountSupporter extends PureComponent {
  static propTypes = {
    intl: PropTypes.object.isRequired,
    openModal: PropTypes.func.isRequired,
    supportAmount: PropTypes.number,
    supportExpiration: PropTypes.string,
    subscriptionDate: PropTypes.string,
    supportStart: PropTypes.string,
    isPremium: PropTypes.bool,
    updateSubscription: PropTypes.func.isRequired,
    language: PropTypes.string.isRequired
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
    const { language, openModal, subscriptionDate } = this.props;

    openModal('CancelSubscription', {
      date: this.getExpirationDate(subscriptionDate).toLocaleDateString(
        language
      )
    });
  };

  getExpirationDate = (subscriptionDate) => {
    const subscriptionDateObject = new Date(subscriptionDate);
    const today = new Date();
    const diff = new Date(today.getTime() - subscriptionDateObject.getTime());
    const yearsDiff = diff.getUTCFullYear() - 1970;
    const monthsDiff = diff.getUTCMonth();
    let expirationDate = subscriptionDateObject;

    if (yearsDiff > 0) {
      expirationDate.setUTCFullYear(
        expirationDate.getUTCFullYear() + yearsDiff
      );
    }

    expirationDate = addMonths(expirationDate, monthsDiff + 1);

    return expirationDate;
  };

  render() {
    const {
      updateError,
      updatePending,
      supportAmount,
      newSupportAmount,
      updateSuccess
    } = this.state;
    const { intl, language, supportExpiration, isPremium, subscriptionDate } =
      this.props;
    const expirationDate = supportExpiration
      ? new Date(supportExpiration).toLocaleDateString(language)
      : this.getExpirationDate(subscriptionDate).toLocaleDateString(language);

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
                {supportExpiration ? (
                  <FormattedMessage id="account.supporterCanceled" />
                ) : (
                  <FormattedMessage id="account.supporter" />
                )}
              </b>
            </P>
            <P
              noPadding={Boolean(supportExpiration)}
              className="account__overview"
            >
              <FormattedMessage id="account.yourAmount" />
              <b className="account__overview-value">
                {supportExpiration ? '-' : `${supportAmount} €`}
              </b>
            </P>
            {supportExpiration && (
              <P className="account__overview">
                <FormattedMessage id="account.date" />
                <b className="account__overview-value">{expirationDate}</b>
              </P>
            )}
            <P>
              <Link
                href="https://www.paypal.com/myaccount/autopay/"
                target="_blank"
              >
                <FormattedMessage id="account.paypalSubscriptions" />
              </Link>
            </P>

            {!supportExpiration && (
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
                </div>
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

            {supportExpiration ? (
              <>
                <H2>
                  <FormattedMessage id="misc.supporterMembership" />
                </H2>
                <SuccessMessage
                  noAnimation
                  message="account.canceledText"
                  hasIcon
                />
                <P>
                  <FormattedMessage id="account.canceledFeedback" />
                  <Link to="/contact" className="account__feedback">
                    <FormattedMessage id="account.canceledLink" />
                  </Link>
                </P>
                <P>
                  <FormattedMessage id="account.learnMore" />
                </P>
                <ButtonSmallBlue to="/upsell" icon="membership">
                  <FormattedMessage
                    id="button.supporter"
                    values={{ b: (msg) => <b>{msg}</b> }}
                  />
                </ButtonSmallBlue>
              </>
            ) : (
              <>
                <H2>
                  <FormattedMessage id="account.cancelTitle" />
                </H2>
                <P>
                  <FormattedMessage
                    id="account.cancelText"
                    values={{ date: <b>{expirationDate}</b> }}
                  />
                  <br />
                  <FormattedMessage id="account.cancelText2" />
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
            <ButtonSmallBlue to="/supporter" icon="membership">
              <FormattedMessage
                id="account.discover"
                values={{ b: (msg) => <b>{msg}</b> }}
              />
            </ButtonSmallBlue>
          </>
        )}
      </>
    );
  }
}

export default injectIntl(AccountSupporter);
