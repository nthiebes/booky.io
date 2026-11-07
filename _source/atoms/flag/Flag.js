import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';

import Icon from '../../atoms/icon';

const translateIds = {
  supporter: 'misc.supporterMembership'
};

export class Flag extends PureComponent {
  render() {
    const { type, className } = this.props;

    return (
      <span className={classNames('flag', `flag--${type}`, className)}>
        <Icon icon="money" size="tiny" color="light" />
        <FormattedMessage id={translateIds[type]} />
      </span>
    );
  }
}
