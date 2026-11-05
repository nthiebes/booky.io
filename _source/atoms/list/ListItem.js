import React, { PureComponent } from 'react';
import classNames from 'classnames';

export default class ListItem extends PureComponent {
  render() {
    const { children, className, isSecondary } = this.props;

    return (
      <li
        className={classNames(
          'list__item',
          isSecondary && 'list__item--secondary',
          className
        )}
      >
        {children}
      </li>
    );
  }
}
