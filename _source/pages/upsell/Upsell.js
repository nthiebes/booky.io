import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import classNames from 'classnames';

import Page from '../../templates/page';
import { H1, H2 } from '../../atoms/headline';
import P from '../../atoms/paragraph';
import Icon from '../../atoms/icon';
import Link from '../../atoms/link';
import Checkbox from '../../atoms/checkbox';
import Input from '../../atoms/input';
import { ErrorMessage, SuccessIllustration } from '../../atoms/messages';
import { ButtonLargeBlue } from '../../atoms/button';
import Label from '../../atoms/label';
import Form from '../../molecules/form';
import Section from '../../molecules/section';
import { loadScript } from '../../_utils/script';
import { clientID, planID } from '../../config';

import './Upsell.scss';

class Upsell extends PureComponent {
  static propTypes = {
    intl: PropTypes.object.isRequired,
    username: PropTypes.string,
    email: PropTypes.string,
    newSubscription: PropTypes.func.isRequired,
    updateUserData: PropTypes.func.isRequired
  };

  state = {
    supportAmount: '',
    agbAccepted: false,
    error: null,
    success: null,
    pending: false
  };

  componentDidMount() {
    loadScript(
      `https://www.paypal.com/sdk/js?client-id=${clientID}&currency=EUR&intent=subscription&vault=true`,
      () => {
        paypal
          // eslint-disable-next-line new-cap
          .Buttons({
            env: 'sandbox',
            style: {
              shape: 'pill',
              color: 'gold',
              layout: 'vertical',
              label: 'subscribe'
            },
            createSubscription: (data, actions) => {
              const { supportAmount } = this.state;

              return actions.subscription.create({
                // eslint-disable-next-line camelcase
                plan_id: planID,
                quantity: supportAmount,
                // eslint-disable-next-line camelcase
                application_context: {
                  // eslint-disable-next-line camelcase
                  shipping_preference: 'NO_SHIPPING'
                }
              });
            },
            onApprove: ({ subscriptionID }) => {
              const { supportAmount } = this.state;
              const { newSubscription, updateUserData } = this.props;

              this.setState({ error: null, pending: true });

              newSubscription({
                subscriptionID,
                supportAmount,
                onSuccess: () => {
                  this.setState({ error: null, success: true, pending: false });
                  updateUserData({
                    premium: true,
                    supportExpiration: null
                  });
                },
                onError: (error) => {
                  this.setState({ error: error, pending: false });
                }
              });
            },
            onError: () => {
              this.setState({ error: 'error.default' });
            }
          })
          .render('#paypal-button-container');
      }
    );
  }

  handleAmountChange = (value) => {
    this.setState({ supportAmount: Math.floor(value) });
  };

  handleAgbChange = () => {
    this.setState({ agbAccepted: !this.state.agbAccepted });
  };

  render() {
    const { intl } = this.props;
    const { supportAmount, agbAccepted, error, pending, success } = this.state;

    return (
      <Page>
        {success ? (
          <Section contentClassName="upsell__success">
            <SuccessIllustration
              headline="upsell.successTitle"
              illustration="supporter-success"
              width="400"
              cta={
                <ButtonLargeBlue
                  icon="collection"
                  to="/"
                  autoWidth
                  contentBefore
                >
                  <FormattedMessage
                    id="upsell.successButton"
                    values={{ b: (msg) => <b>{msg}</b> }}
                  />
                </ButtonLargeBlue>
              }
            >
              <P size="large">
                <FormattedMessage id="upsell.successText" />
              </P>
              <H2 centered>
                <FormattedMessage id="upsell.nbaText" />
              </H2>
            </SuccessIllustration>
          </Section>
        ) : (
          <>
            <Section>
              <H1>
                <FormattedMessage id="supporter.yourMembership" />
              </H1>
              <P size="large">
                <FormattedMessage id="supporter.subtitle" />
              </P>
            </Section>
            <Section contentClassName="upsell__wrapper">
              <div>
                <H2>
                  <FormattedMessage id="upsell.title" />
                </H2>
                <Form>
                  <Label htmlFor="amount">
                    <FormattedMessage id="upsell.amount" />
                  </Label>
                  <div className="upsell__amount-wrapper">
                    <Input
                      id="amount"
                      value={supportAmount.toString()}
                      type="number"
                      onChange={this.handleAmountChange}
                      min="1"
                      required
                      placeholder={intl.formatMessage({
                        id: 'upsell.placeholder'
                      })}
                      disabled={pending}
                      className="upsell__amount"
                    />
                    <P size="large" className="upsell__euro" noPadding>
                      {'€'}
                    </P>
                  </div>
                  <Checkbox
                    label={intl.formatMessage(
                      {
                        id: 'upsell.termsLabel'
                      },
                      {
                        terms: (
                          <Link to="/terms" target="_blank">
                            <FormattedMessage id="upsell.terms" />
                          </Link>
                        )
                      }
                    )}
                    id="closeEditMode"
                    name="closeEditMode"
                    onChange={this.handleAgbChange}
                    checked={agbAccepted}
                    required
                    disabled={pending}
                  />
                  <div
                    id="paypal-button-container"
                    className={classNames(
                      'upsell__paypal',
                      (!agbAccepted || !supportAmount || pending) &&
                        'upsell__paypal--disabled'
                    )}
                  />
                  {error && <ErrorMessage message={error} hasIcon />}
                </Form>
              </div>
              <div className="upsell__facts">
                <H2>
                  <FormattedMessage id="upsell.facts" />
                </H2>
                <P first className="upsell__fact">
                  <Icon icon="check" color="blue" />
                  <FormattedMessage id="upsell.fact1" />
                </P>
                <P className="upsell__fact">
                  <Icon icon="check" color="blue" />
                  <FormattedMessage id="upsell.fact2" />
                </P>
                <P className="upsell__fact">
                  <Icon icon="check" color="blue" />
                  <FormattedMessage id="upsell.fact3" />
                </P>
              </div>
            </Section>
          </>
        )}
      </Page>
    );
  }
}

export default injectIntl(Upsell);
