import React, { PureComponent } from 'react';
import classNames from 'classnames';

export class Hr extends PureComponent {
  render() {
    const { className } = this.props;

    return <hr className={classNames('hr', className)} />;
  }
}
