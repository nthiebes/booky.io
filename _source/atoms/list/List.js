import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class List extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.element
    ]).isRequired,
    className: PropTypes.string,
    darkMode: PropTypes.bool
  }
  render() {
    const { children, className, darkMode } = this.props;

    return (
      <ul className={ classNames('list', darkMode && 'list--darkMode', className) }>
        { children }
      </ul>
    );
  }
}
