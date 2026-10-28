import React, { PureComponent } from 'react';
import classNames from 'classnames';

export default class Tooltip extends PureComponent {
  render() {
    const { text, direction, darkMode } = this.props;

    return (
      <span
        className={classNames(
          'tooltip-wrapper',
          `tooltip-wrapper--${direction}`
        )}
      >
        <span
          className={classNames(
            'tooltip',
            `tooltip--${direction}`,
            darkMode && 'tooltip--darkMode'
          )}
        >
          {text}
        </span>
      </span>
    );
  }
}
