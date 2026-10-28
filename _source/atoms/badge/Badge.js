import React, { PureComponent } from 'react';
import classNames from 'classnames';

export class Badge extends PureComponent {
  render() {
    const { className, children } = this.props;

    return <div className={classNames('badge', className)}>{children}</div>;
  }
}
