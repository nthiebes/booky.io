import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, FormattedHTMLMessage, injectIntl } from 'react-intl';

import fetcher from '../../_utils/fetcher';
import Page from '../../templates/page';
import { H1 } from '../../atoms/headline';
import P from '../../atoms/paragraph';
import Link from '../../atoms/link';
import Input from '../../atoms/input';
import { ErrorMessage } from '../../atoms/messages';
import { ButtonLargeBlue } from '../../atoms/button';
import Checkbox from '../../atoms/checkbox';
import Form from '../../molecules/form';
import Section from '../../molecules/section';

class Login extends Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      username: '',
      password: '',
      pending: false,
      showPassword: false,
      error: null
    };
  }

  handleInputChange(value, name) {
    this.setState({
      [name]: value,
      pending: false
    });
  }

  handleCheckboxChange({ checked }) {
    this.setState({
      showPassword: checked
    });
  }

  handleSubmit(params) {
    this.setState({
      pending: true,
      error: false
    });

    fetcher({
      url: '/login',
      type: 'POST',
      params,
      onSuccess: (data) => {
        // console.log('success:', data);

        window.setTimeout(() => {
          this.setState({
            pending: false,
            error: data.error
          });
        }, 300);

        !data.error && this.props.updateUser(data.user);
      },
      onError: () => {
        window.setTimeout(() => {
          this.setState({
            pending: false,
            error: 'error.default'
          });
        }, 300);
      }
    });
  }

  render() {
    const { intl } = this.props;
    const { username, password, pending, showPassword, error } = this.state;

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
              label={ intl.formatMessage({ id: 'login.usernameEmail' }) }
              onChange={ this.handleInputChange }
              maxLength="50"
              required
              disabled={ pending }
            />
            <Input
              value={ password }
              name="password"
              id="password"
              autoComplete="current-password"
              label={ intl.formatMessage({ id: 'login.password' }) }
              onChange={ this.handleInputChange }
              maxLength="225"
              required
              type={ showPassword ? 'text' : 'password' }
              disabled={ pending }
            />
            <Checkbox
              label={ intl.formatMessage({ id: 'login.showPassword'}) }
              id="show-password"
              onChange={ this.handleCheckboxChange }
            />
            { error && <ErrorMessage message={ error } hasIcon /> }
            <ButtonLargeBlue
              icon="account"
              type="submit"
              pending={ pending }
              disabled={ pending }
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
  intl: PropTypes.object.isRequired,
  updateUser: PropTypes.func.isRequired
};

export default injectIntl(Login);
