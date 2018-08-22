import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, FormattedHTMLMessage, injectIntl } from 'react-intl';

import Page from '../../templates/page';
import { H1 } from '../../atoms/headline';
import P from '../../atoms/paragraph';
import Link from '../../atoms/link';
import Input from '../../atoms/input';
import { ButtonLargeBlue } from '../../atoms/button';
import Checkbox from '../../atoms/checkbox';
import Form from '../../molecules/form';
import Section from '../../molecules/section';

import './Login.scss';

class Login extends Component {
  constructor(props) {
    super(props);

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      username: '',
      password: '',
      disabled: false,
      pending: false,
      showPassword: false
    };
  }

  handleUsernameChange(value) {
    this.setState({
      username: value,
      disabled: false,
      pending: false
    });
  }

  handlePasswordChange(value) {
    this.setState({
      password: value,
      disabled: false,
      pending: false
    });
  }

  handleCheckboxChange(checked) {
    this.setState({
      showPassword: checked
    });
  }

  handleSubmit(params) {
    console.log(params);

    this.setState({
      disabled: true,
      pending: true
    });
  }

  render() {
    const { intl } = this.props;
    const { username, password, pending, disabled, showPassword } = this.state;

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
              disabled={ disabled }
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
              type={ showPassword ? 'text' : 'password' }
              disabled={ disabled }
            />
            <Checkbox label="Show password" id="show-password" name="show-password" onChange={ this.handleCheckboxChange } />
            <ButtonLargeBlue
              icon={ pending ? 'spinner' : 'join' }
              type="submit"
              pending={ pending }
              disabled={ disabled }
              contentBefore
            >
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
