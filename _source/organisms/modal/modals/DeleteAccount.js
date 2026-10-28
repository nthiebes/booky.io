import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';

import Base from '../Base';
import Label from '../../../atoms/label';

class DeleteAccount extends Component {
  render() {
    const { intl, onSave, ...props } = this.props;

    return (
      <Base
        {...props}
        onSave={onSave}
        headline={intl.formatMessage({ id: 'modal.deleteAccount' })}
      >
        <Label>
          <FormattedMessage id="modal.deleteAccountLabel" />
        </Label>
      </Base>
    );
  }
}

export default injectIntl(DeleteAccount);
