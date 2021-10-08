import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

import Input from '../../../atoms/input';
import { ButtonLargeBlue } from '../../../atoms/button';
import P from '../../../atoms/paragraph';
import Form from '../../../molecules/form';
import Checkbox from '../../../atoms/checkbox';
import { ErrorMessage, SuccessMessage } from '../../../atoms/messages';

class AccountData extends Component {
  state = {
    username: this.props.name,
    oldPassword: '',
    newPassword: '',
    pending: false,
    showPassword: false,
    error: null,
    success: false
  };

  handleInputChange = (value, name) => {
    this.setState({
      [name]: value,
      pending: false
    });
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
      success: false
    });

    updateUser({
      userData,
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
    const { intl, email } = this.props;
    const {
      username,
      oldPassword,
      newPassword,
      pending,
      showPassword,
      error,
      success
    } = this.state;

    return (
      <Form className="account__form" onSubmit={this.handleSubmit}>
        <P first noPadding>
          <FormattedMessage id="account.yourEmail" />
        </P>
        <P>
          <b>{email}</b>
        </P>
        <Input
          value={username}
          name="username"
          id="username"
          label={intl.formatMessage({ id: 'login.username' })}
          onChange={this.handleInputChange}
          maxLength="50"
          required
          disabled={pending}
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
        {success && <SuccessMessage message="account.success" hasIcon />}
      </Form>
    );
  }
}

AccountData.propTypes = {
  intl: PropTypes.object.isRequired,
  updateUser: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

export default injectIntl(AccountData);
