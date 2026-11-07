import React, { Component } from 'react';
import classNames from 'classnames';

export default class Tab extends Component {
  static defaultProps = {
    provided: {}
  };

  handleClick = () => {
    const { tabId, onClick } = this.props;

    onClick(tabId);
  };

  handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      this.handleClick();
    }
  };

  render() {
    const { children, active, darkMode, provided, disabled } = this.props;

    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
      <li
        className={classNames(
          'tab-bar__tab',
          active && 'tab-bar__tab--active',
          darkMode && 'tab-bar__tab--dark-mode',
          disabled && 'tab-bar__tab--disabled'
        )}
        onClick={this.handleClick}
        {...provided.draggableProps}
        ref={provided.innerRef}
      >
        <span
          className="tab-bar__button"
          role={disabled ? null : 'button'}
          tabIndex={disabled ? null : '0'}
          onKeyDown={disabled ? null : this.handleKeyDown}
        >
          {children}
        </span>
      </li>
    );
  }
}
