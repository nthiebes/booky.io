import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Tooltip extends PureComponent {
  static propTypes = {
    text: PropTypes.string,
    direction: PropTypes.string,
    darkMode: PropTypes.bool
  };

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
