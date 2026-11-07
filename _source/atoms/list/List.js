import React, { PureComponent } from 'react';
import classNames from 'classnames';

export default class List extends PureComponent {
  render() {
    const { children, className, darkMode } = this.props;

    return (
      <ul
        className={classNames('list', darkMode && 'list--darkMode', className)}
      >
        {children}
      </ul>
    );
  }
}
