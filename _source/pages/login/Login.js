import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, FormattedHTMLMessage, injectIntl } from 'react-intl';

import Page from '../../templates/page';
import { H1 } from '../../atoms/headline';
import P from '../../atoms/paragraph';
import Link from '../../atoms/link';
import Input from '../../atoms/input';
import { ButtonLargeBlue } from '../../atoms/button';
import Form from '../../molecules/form';
import Section from '../../molecules/section';

import './Login.scss';

class Login extends Component {
  constructor(props) {
    super(props);

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleUsernameChange(value) {
    this.setState({
      username: value
    });
  }

  handlePasswordChange(value) {
    this.setState({
      password: value
    });
  }

  handleSubmit(params) {
    console.log(params);
  }

  render() {
    const { intl } = this.props;
    const { username, password } = this.state;

    return (
      <Page>
        <Section compact>
          <Form onSubmit={ this.handleSubmit }>
            <H1>
              <FormattedMessage id="login.headline" />
            </H1>
            <Input
              value={ username }
              name="username"
              id="username"
              autoComplete="username"
              label={ intl.formatMessage({ id: 'login.username' }) }
              onChange={ this.handleUsernameChange }
              maxLength="50"
              required
            />
            <Input
              value={ password }
              name="password"
              id="password"
              autoComplete="current-password"
              label={ intl.formatMessage({ id: 'login.password' }) }
              onChange={ this.handlePasswordChange }
              maxLength="225"
              required
              type="password"
            />
            <ButtonLargeBlue icon="join" type="submit" contentBefore>
              <FormattedHTMLMessage id="header.login" />
            </ButtonLargeBlue>
            <Link className="login__forgot" to="/forgot">
              <FormattedMessage id="login.forgot" />
            </Link>
            <P className="login__join">
              <FormattedMessage id="login.new" />
              { ' ' }
              <Link to="/join">
                <FormattedMessage id="login.join" />
              </Link>
            </P>
          </Form>
        </Section>
      </Page>
    );
  }
}

Login.propTypes = {
  intl: PropTypes.object.isRequired
};

export default injectIntl(Login);
