import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
// import { FormattedMessage, injectIntl } from 'react-intl';

import Page from '../../templates/page';
import { H1 } from '../../atoms/headline';
import Input from '../../atoms/input';
// import { ButtonLargeBlue } from '../../atoms/button';
import Section from '../../molecules/section';
import { loadScript } from '../../_utils/script';

class Supporter extends PureComponent {
  static propTypes = {
    // intl: PropTypes.object.isRequired
  };

  state = {
    quantity: 2
  };

  componentDidMount() {
    loadScript(
      // eslint-disable-next-line max-len
      'https://www.paypal.com/sdk/js?client-id=AfEjqLduFx2sXN6-g97vpIceMbvrTKb7YWOaEwUIbyJ5wO03KMtAPBIxlmbdTnC57h7TFljx7SZUd-y2&currency=EUR&intent=subscription&vault=true',
      () => {
        // eslint-disable-next-line no-undef
        paypal
          // eslint-disable-next-line new-cap
          .Buttons({
            env: 'sandbox',
            style: {
              shape: 'rect',
              color: 'gold',
              layout: 'vertical',
              label: 'subscribe'
            },
            createSubscription: (data, actions) => {
              const { quantity } = this.state;

              return actions.subscription.create({
                // eslint-disable-next-line camelcase
                plan_id: 'P-8BA43361MS5240329MCBIDYA',
                quantity
              });
            },
            onApprove: ({ subscriptionID }) => {
              console.log('subscriptionID', subscriptionID);
            },
            onError: () => {
              //
            }
          })
          .render('#paypal-button-container');
      }
    );
  }

  handleOnChange = (value) => {
    this.setState({ quantity: value });
  };

  render() {
    const { quantity } = this.state;

    return (
      <Page>
        <Section>
          <H1>{'Hi PayPal!'}</H1>
          <Input
            value={quantity.toString()}
            type="number"
            onChange={this.handleOnChange}
            min="1"
          />
          <div id="paypal-button-container" />
        </Section>
      </Page>
    );
  }
}

export default Supporter;
