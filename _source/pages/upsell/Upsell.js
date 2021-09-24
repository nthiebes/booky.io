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
    newSubscription: PropTypes.func.isRequired
  };

  state = {
    supportAmount: '',
    agbAccepted: false,
    error: null
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
                quantity: supportAmount
              });
            },
            onApprove: ({ subscriptionID, ...data }) => {
              const { supportAmount } = this.state;
              const { newSubscription } = this.props;

              console.log('oh yes!', subscriptionID, data);
              this.setState({ error: null });

              newSubscription({
                subscriptionID,
                supportAmount,
                onSuccess: () => {
                  console.log('success');
                  this.setState({ error: null });
                },
                onError: (error) => {
                  console.log('error', error);
                  this.setState({ error: error });
                }
              });
            },
            onError: (error) => {
              console.log('oh no!', error);
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
    const { supportAmount, agbAccepted, error } = this.state;

    return (
      <Page>
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
              <FormattedMessage id="Betrag wählen und Abonnement abschließen" />
            </H2>
            <Form>
              <Input
                label="Dein monatlicher Betrag"
                id="amount"
                value={supportAmount.toString()}
                type="number"
                onChange={this.handleAmountChange}
                min="1"
                required
                placeholder="z.B. einen kleinen Cappuccino im Monat (2,50 €)"
              />
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
              />
              <div
                id="paypal-button-container"
                className={classNames(
                  'upsell__paypal',
                  (!agbAccepted || !supportAmount) && 'upsell__paypal--disabled'
                )}
              />
              {error && <ErrorMessage message={error} hasIcon />}
            </Form>
          </div>
          <div className="upsell__facts">
            <H2>
              <FormattedMessage id="Die wichtigsten Fakten" />
            </H2>
            <P first className="upsell__fact">
              <Icon icon="check" color="blue" />
              <FormattedMessage id="Du bestimmst den Preis (Mindestens 1 €)" />
            </P>
            <P className="upsell__fact">
              <Icon icon="check" color="blue" />
              <FormattedMessage id="Monatlich bezahlt" />
            </P>
            <P className="upsell__fact">
              <Icon icon="check" color="blue" />
              <FormattedMessage id="Jederzeit kündbar" />
            </P>
            <P className="upsell__fact">
              <Icon icon="check" color="blue" />
              <FormattedMessage id="Passe den Betrag jederzeit an" />
            </P>
          </div>
        </Section>
      </Page>
    );
  }
}

export default injectIntl(Upsell);
