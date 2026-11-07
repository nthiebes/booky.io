import React, { PureComponent } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';

import fetcher from '../../_utils/fetcher';
import Page from '../../templates/page';
import { H1 } from '../../atoms/headline';
import P from '../../atoms/paragraph';
import Illustration from '../../atoms/illustration';
import Link from '../../atoms/link';
import Section from '../../molecules/section';

class Contact extends PureComponent {
  state = {
    name: this.props.username,
    email: this.props.email,
    message: '',
    pending: false,
    error: null,
    success: false
  };

  handleInputChange = (value, name) => {
    this.setState({
      [name]: value,
      pending: false
    });
  };

  handleSubmit = (params) => {
    this.setState({
      pending: true,
      error: false
    });

    fetcher({
      url: '/contact',
      method: 'POST',
      params,
      onSuccess: () => {
        this.setState({
          pending: false,
          success: true
        });
      },
      onError: (error) => {
        this.setState({
          pending: false,
          error
        });
      }
    });
  };

  render() {
    return (
      <Page>
        <Section className="contact">
          <span>
            <H1>
              <FormattedMessage id="contact.headline" />
            </H1>
            <P first>
              <FormattedMessage
                id="contact.text"
                values={{
                  link: <FormattedMessage id="contact.textLink" />
                }}
              />
            </P>
            <P>
              <FormattedMessage id="login.email" />
              {': '}
              <Link href="mailto:hello@booky.io">{'hello@booky.io'}</Link>
            </P>
            <P>
              <FormattedMessage id="contact.language" />
            </P>
          </span>
          <Illustration name="email" className="contact__illustration" />
        </Section>
      </Page>
    );
  }
}

export default injectIntl(Contact);
