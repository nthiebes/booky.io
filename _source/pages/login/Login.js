import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';

import Page from '../../templates/page';
import { H1 } from '../../atoms/headline';
import Link from '../../atoms/link';
import Input from '../../atoms/input';
import { ButtonLargePrimary } from '../../atoms/button';
import Form from '../../molecules/form';

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
        <Form onSubmit={ this.handleSubmit }>
          <H1><FormattedMessage id="menu.login" /></H1>
          <Input
            value={ username }
            name="username"
            id="username"
            autoComplete="username"
            onChange={ this.handleUsernameChange }
            label={ intl.formatMessage({ id: 'login.username' }) }
            required
          />
          <Input
            value={ password }
            name="password"
            id="password"
            autoComplete="current-password"
            onChange={ this.handlePasswordChange }
            label={ intl.formatMessage({ id: 'login.password' }) }
            required
            type="password"
          />
          <ButtonLargePrimary icon="join" type="submit" contentBefore>
            <FormattedMessage id="menu.login" />
          </ButtonLargePrimary>
          <Link>
            <FormattedMessage id="login.forgot" />
          </Link>
        </Form>
      </Page>
    );
  }
}

export default injectIntl(Login);
