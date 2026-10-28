import React, { PureComponent } from 'react';
import classNames from 'classnames';

export default class ListItem extends PureComponent {
  render() {
    const { children, className } = this.props;

    return <li className={classNames('list__item', className)}>{children}</li>;
  }
}
