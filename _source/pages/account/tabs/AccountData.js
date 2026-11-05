import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';

import Input from '../../../atoms/input';
import { ButtonLargeBlue } from '../../../atoms/button';
import Form from '../../../molecules/form';
import Checkbox from '../../../atoms/checkbox';
import { ErrorMessage, SuccessMessage } from '../../../atoms/messages';

class AccountData extends Component {
  state = {
    username: this.props.name,
    usernamePending: false,
    usernameError: null,
    email: this.props.email,
    emailPending: false,
    emailError: null,
    confirmationSentTo: null,
    oldPassword: '',
    newPassword: '',
    pending: false,
    showPassword: false,
    error: null,
    success: false
  };

  componentWillUnmount() {
    Object.values(this.fetchTimeouts).forEach(clearTimeout);
  }

  fetchTimeouts = {};

  handleInputChange = (value, name) => {
    this.setState({
      [name]: value,
      pending: false
    });

    if (name === 'email' || name === 'username') {
      this.validateField(name, value);
    }
  };

  validateField = (name, value) => {
    const { email, name: username, validate } = this.props;
    const currentValue = name === 'email' ? email : username;

    clearTimeout(this.fetchTimeouts[name]);

    if (!value || value.toLowerCase() === currentValue.toLowerCase()) {
      this.setState({
        [`${name}Error`]: null,
        [`${name}Pending`]: false
      });

      return;
    }

    this.fetchTimeouts[name] = setTimeout(() => {
      this.setState({
        [`${name}Pending`]: true
      });

      validate({
        params: {
          name,
          value
        },
        onSuccess: ({ reason }) => {
          this.handleFieldValidated(name, value, reason);
        },
        onError: (error) => {
          this.handleFieldValidated(name, value, error);
        }
      });
    }, 500);
  };

  handleFieldValidated = (name, value, error) => {
    // A slower response for an earlier input must not overwrite the current state
    if (value === this.state[name]) {
      this.setState({
        [`${name}Error`]: error,
        [`${name}Pending`]: false
      });
    }
  };

  handleCheckboxChange = ({ checked }) => {
    this.setState({
      showPassword: checked
    });
  };

  handleSubmit = (userData) => {
    const { updateUser } = this.props;

    this.setState({
      pending: true,
      error: false,
      success: false,
      confirmationSentTo: null
    });

    updateUser({
      userData,
      onSuccess: ({ emailConfirmationSent }) => {
        this.setState({
          pending: false,
          success: true,
          // The current address stays active until the new one is confirmed
          ...(emailConfirmationSent && {
            email: this.props.email,
            confirmationSentTo: userData.email
          })
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
    const { intl } = this.props;
    const {
      username,
      usernamePending,
      usernameError,
      email,
      emailPending,
      emailError,
      confirmationSentTo,
      oldPassword,
      newPassword,
      pending,
      showPassword,
      error,
      success
    } = this.state;

    return (
      <Form className="account__form" onSubmit={this.handleSubmit}>
        <Input
          value={email}
          name="email"
          id="email"
          autoComplete="email"
          label={intl.formatMessage({ id: 'login.email' })}
          onChange={this.handleInputChange}
          maxLength="150"
          type="email"
          required
          disabled={pending}
          pending={emailPending}
          error={emailError}
        />
        <Input
          value={username}
          name="username"
          id="username"
          autoComplete="username"
          label={intl.formatMessage({ id: 'login.username' })}
          onChange={this.handleInputChange}
          maxLength="50"
          required
          disabled={pending}
          pending={usernamePending}
          error={usernameError}
        />
        <Input
          value={oldPassword}
          name="oldPassword"
          id="oldPassword"
          label={intl.formatMessage({ id: 'login.password' })}
          onChange={this.handleInputChange}
          maxLength="225"
          required
          type={showPassword ? 'text' : 'password'}
          disabled={pending}
        />
        <Input
          value={newPassword}
          name="newPassword"
          id="newPassword"
          label={intl.formatMessage({ id: 'account.newPassword' })}
          onChange={this.handleInputChange}
          maxLength="225"
          type={showPassword ? 'text' : 'password'}
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
          requirements={intl.formatMessage({ id: 'misc.validPassword' })}
          disabled={pending}
        />
        <Checkbox
          label={intl.formatMessage({ id: 'login.showPassword' })}
          id="show-password"
          onChange={this.handleCheckboxChange}
        />
        <ButtonLargeBlue
          icon="save"
          type="submit"
          pending={pending}
          disabled={pending}
          contentBefore
        >
          <FormattedMessage
            id="button.update"
            values={{ b: (msg) => <b>{msg}</b> }}
          />
        </ButtonLargeBlue>
        {error && <ErrorMessage message={error} hasIcon />}
        {success && !confirmationSentTo && (
          <SuccessMessage message="account.success" hasIcon />
        )}
        {confirmationSentTo && (
          <SuccessMessage
            message="account.emailConfirmation"
            values={{ email: confirmationSentTo }}
            hasIcon
          />
        )}
      </Form>
    );
  }
}

export default injectIntl(AccountData);
