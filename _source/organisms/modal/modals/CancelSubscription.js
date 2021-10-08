import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

import Base from '../Base';
import P from '../../../atoms/paragraph';

class CancelSubscription extends PureComponent {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    intl: PropTypes.object.isRequired,
    pending: PropTypes.bool,
    darkMode: PropTypes.bool
  };

  render() {
    const { intl, onSave, ...props } = this.props;
    const { date } = props.data;

    return (
      <Base
        {...props}
        onSave={onSave}
        headline={intl.formatMessage({ id: 'account.cancelTitle' })}
        confirmText={intl.formatMessage(
          { id: 'modal.cancelSubscription' },
          {
            b: (msg) => <b>{msg}</b>
          }
        )}
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
