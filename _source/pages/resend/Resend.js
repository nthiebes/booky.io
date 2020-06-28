import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, FormattedHTMLMessage, injectIntl } from 'react-intl';

import Page from '../../templates/page';
import { H1 } from '../../atoms/headline';
import P from '../../atoms/paragraph';
import Link from '../../atoms/link';
import Input from '../../atoms/input';
import { ErrorMessage, SuccessMessage } from '../../atoms/messages';
import { ButtonLargeBlue } from '../../atoms/button';
import Form from '../../molecules/form';
import Section from '../../molecules/section';
import Illustration from '../../atoms/illustration';

import './Resend.scss';

class Resend extends Component {
  static propTypes = {
    intl: PropTypes.object.isRequired,
    resend: PropTypes.func.isRequired
  }

  state = {
    username: '',
    email: '',
    pending: false,
    error: null
  }

  handleInputChange = (value, name) => {
    this.setState({
      [name]: value,
      pending: false
    });
  }

  handleSubmit = (params) => {
    const { resend } = this.props;

    this.setState({
      pending: true,
      error: false
    });

    resend({
      params,
      onSuccess: (data) => {
        console.log('success', data);

        window.scrollTo(0, 0);
        this.setState({
          pending: false,
          success: true
        });
      },
      onError: (error) => {
        console.log('error', error);

        // this.setState({
        //   pending: false,
        //   success: true
        // });
        this.setState({
          pending: false,
          error
        });
      }
    });
  }

  render() {
    const { intl } = this.props;
    const { username, email, pending, error, success } = this.state;

    return (
      <Page>
        <Section className="resend">
          { success ? (
            <SuccessMessage message="resend.success" hasIcon icon="smile" />
          ) : (
            <Fragment>
              <Form onSubmit={ this.handleSubmit } className="resend__form">
                <H1>
                  <FormattedMessage id="resend.headline" />
                </H1>
                <Input
                  value={ username }
                  name="username"
                  id="username"
                  autoComplete="username"
                  label={ intl.formatMessage({ id: 'login.username' }) }
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
                <ButtonLargeBlue
                  icon="resend"
                  type="submit"
                  pending={ pending }
                  disabled={ pending }
                  contentBefore
                >
                  <FormattedHTMLMessage id="resend.button" />
                </ButtonLargeBlue>
                { error && <ErrorMessage message={ error } hasIcon /> }
              </Form>
              <Illustration
                name="monitor-window"
                width="300"
                height="300"
                className="resend__illustration"
              />
            </Fragment>
          )}
        </Section>
      </Page>
    );
  }
}

export default injectIntl(Resend);
