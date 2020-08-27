import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

import Page from '../../templates/page';
import { H1 } from '../../atoms/headline';
import Input from '../../atoms/input';
import { ErrorMessage, SuccessIllustration } from '../../atoms/messages';
import { ButtonLargeBlue } from '../../atoms/button';
import Form from '../../molecules/form';
import Section from '../../molecules/section';
import Illustration from '../../atoms/illustration';

class Forgot extends Component {
  static propTypes = {
    intl: PropTypes.object.isRequired,
    forgot: PropTypes.func.isRequired
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
    const { forgot } = this.props;

    this.setState({
      pending: true,
      error: false
    });

    forgot({
      params,
      onSuccess: () => {
        window.scrollTo(0, 0);
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
    const { username, email, pending, error, success } = this.state;

    return (
      <Page>
        <Section className="forgot">
          { success ? (
            <SuccessIllustration message="forgot.success" hasIcon icon="smile" />
          ) : (
            <Fragment>
              <Form onSubmit={ this.handleSubmit } className="forgot__form">
                <H1>
                  <FormattedMessage id="forgot.headline" />
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
                  icon="send"
                  type="submit"
                  pending={ pending }
                  disabled={ pending }
                  contentBefore
                >
                  <FormattedMessage id="forgot.button" values={ { b: (msg) => <b>{msg}</b> } } />
                </ButtonLargeBlue>
                { error && <ErrorMessage message={ error } hasIcon /> }
              </Form>
              <Illustration
                name="password"
                className="forgot__illustration"
              />
            </Fragment>
          )}
        </Section>
      </Page>
    );
  }
}

export default injectIntl(Forgot);
