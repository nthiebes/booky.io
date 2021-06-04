import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class ListItem extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.element,
      PropTypes.string
    ]).isRequired,
    className: PropTypes.string
  };
  render() {
    const { children, className } = this.props;

    return <li className={classNames('list__item', className)}>{children}</li>;
  }
}
