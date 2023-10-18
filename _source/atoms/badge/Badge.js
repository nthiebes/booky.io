import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class Badge extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired
  };

  render() {
    const { className, children } = this.props;

    return <div className={classNames('badge', className)}>{children}</div>;
  }
}
