import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';

import Input from '../../../atoms/input';
import Base from '../Base';
import Label from '../../../atoms/label';

class DeleteAccount extends Component {
  state = {
    password: ''
  };

  handleInputChange = (value, name) => {
    this.setState({
      [name]: value
    });
  };

  handleSave = (data) => {
    const { history, onSave } = this.props;

    onSave({
      ...data,
      onDeleted: () => {
        history.push('/');
      }
    });
  };

  render() {
    const { intl, pending, ...props } = this.props;
    const { password } = this.state;

    return (
      <Base
        {...props}
        onSave={this.handleSave}
        pending={pending}
        headline={intl.formatMessage({ id: 'modal.deleteAccount' })}
      >
        <Label>
          <FormattedMessage id="modal.deleteAccountLabel" />
        </Label>
        <Input
          value={password}
          name="password"
          id="password"
          label={intl.formatMessage({ id: 'login.password' })}
          onChange={this.handleInputChange}
          maxLength="225"
          required
          type="password"
          disabled={pending}
        />
      </Base>
    );
  }
}

export default injectIntl(withRouter(DeleteAccount));
