import React, { PureComponent } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';

import Base from '../Base';
import P from '../../../atoms/paragraph';

class CancelSubscription extends PureComponent {
  render() {
    const { intl, onSave, ...props } = this.props;
    const { date } = props.data;

    return (
      <Base
        {...props}
        onSave={onSave}
        headline={intl.formatMessage({ id: 'account.cancelTitle' })}
        confirmText={intl.formatMessage(
          {
            id: 'modal.terminateAccountButton'
          },
          {
            b: (msg) => <b>{msg}</b>
          }
        )}
        cancelText={intl.formatMessage({
          id: 'modal.notNowButton'
        })}
      >
        <P>
          <FormattedMessage
            id="modal.cancelText"
            values={{ date: <b>{date}</b> }}
          />
        </P>
      </Base>
    );
  }
}

export default injectIntl(CancelSubscription);
