import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Fullscreen extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
  }

  render() {
    const { children, className } = this.props;

    return (
      <main className={ classNames(
        'fullscreen',
        className
      ) }>
        { children }
      </main>
    );
  }
}
