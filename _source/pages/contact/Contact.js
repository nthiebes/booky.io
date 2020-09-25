import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

import fetcher from '../../_utils/fetcher';
import Page from '../../templates/page';
import { H1 } from '../../atoms/headline';
import P from '../../atoms/paragraph';
import Input from '../../atoms/input';
import { ErrorMessage, SuccessIllustration } from '../../atoms/messages';
import { ButtonLargeBlue } from '../../atoms/button';
import Textarea from '../../atoms/textarea';
import Illustration from '../../atoms/illustration';
import Form from '../../molecules/form';
import Section from '../../molecules/section';

class Contact extends PureComponent {
  static propTypes = {
    intl: PropTypes.object.isRequired,
    username: PropTypes.string,
    email: PropTypes.string
  }

  state = {
    name: this.props.username,
    email: this.props.email,
    message: '',
    pending: false,
    error: null,
    success: false
  }

  handleInputChange = (value, name) => {
    this.setState({
      [name]: value,
      pending: false
    });
  }

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
  }

  render() {
    const { intl } = this.props;
    const { name, email, message, pending, error, success } = this.state;

    return (
      <Page>
        <Section className="contact">
          { success ? (
            <SuccessIllustration message="contact.success" illustration="join-success" width="400" />
          ) : (
            <>
              <Form onSubmit={ this.handleSubmit }>
                <H1>
                  <FormattedMessage id="contact.headline" />
                </H1>
                <P first>
                  <FormattedMessage id="contact.text" />
                </P>
                <Input
                  value={ name }
                  name="name"
                  id="name"
                  autoComplete="username"
                  label={ intl.formatMessage({ id: 'misc.name' }) }
                  onChange={ this.handleInputChange }
                  maxLength="50"
                  required
                  disabled={ pending }
                />
                <Input
                  value={ email }
                  name="email"
                  id="email"
                  autoComplete="email"
                  label={ intl.formatMessage({ id: 'login.email' }) }
                  onChange={ this.handleInputChange }
                  maxLength="150"
                  required
                  type="email"
                  requirements={ intl.formatMessage({ id: 'misc.validEmail' }) }
                  disabled={ pending }
                />
                <Textarea
                  value={ message }
                  name="message"
                  id="message"
                  label={ intl.formatMessage({ id: 'contact.message' }) }
                  onChange={ this.handleInputChange }
                  maxLength="5000"
                  required
                  disabled={ pending }
                  rows={ 5 }
                  className="contact__message"
                />
                <ButtonLargeBlue
                  icon="send"
                  type="submit"
                  pending={ pending }
                  disabled={ pending }
                  contentBefore
                >
                  <FormattedMessage id="button.send" values={ { b: (msg) => <b>{msg}</b> } } />
                </ButtonLargeBlue>
                { error && <ErrorMessage message={ error } hasIcon /> }
              </Form>
              <Illustration
                name="email"
                className="contact__illustration booky--hide-mobile-tablet"
              />
            </>
          ) }
        </Section>
      </Page>
    );
  }
}

export default injectIntl(Contact);
