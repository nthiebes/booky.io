import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';

import Icon from '../../atoms/icon';

const translateIds = {
  supporter: 'misc.supporterMembership'
};

export class Flag extends PureComponent {
  static propTypes = {
    type: PropTypes.oneOf(['supporter']),
    className: PropTypes.string
  };

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
