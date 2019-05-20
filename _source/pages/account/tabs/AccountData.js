import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

import Input from '../../../atoms/input';
import { ButtonLargeBlue } from '../../../atoms/button';
import Form from '../../../molecules/form';

class AccountData extends Component {
  render() {
    const { intl, name, email } = this.props;

    return (
      <Form className="account__form">
        <Input
          name="username"
          id="username"
          label={ intl.formatMessage({ id: 'login.username' }) }
          maxLength="50"
          required
          value={ name }
        />
        <Input
          name="email"
          id="email"
          label={ intl.formatMessage({ id: 'login.email' }) }
          maxLength="150"
          required
          type="email"
          requirements={ intl.formatMessage({ id: 'misc.validEmail' }) }
          value={ email }
        />
        <Input
          name="password"
          id="password"
          label={ intl.formatMessage({ id: 'login.password' }) }
          maxLength="225"
          required
          type="password"
          autoComplete="current-password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
        />
        <Input
          name="new-password"
          id="new-password"
          label={ intl.formatMessage({ id: 'account.newPassword' }) }
          maxLength="225"
          type="password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
          requirements={ intl.formatMessage({ id: 'misc.validPassword' }) }
        />
        <ButtonLargeBlue icon="save" contentBefore>
          <FormattedMessage id="button.update" />
        </ButtonLargeBlue>
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
