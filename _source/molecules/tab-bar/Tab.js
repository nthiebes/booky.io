import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Tab extends Component {
  static propTypes = {
    tabId: PropTypes.number.isRequired,
    active: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    darkMode: PropTypes.bool,
    children: PropTypes.node.isRequired,
    provided: PropTypes.object,
    disabled: PropTypes.bool
  }

  static defaultProps = {
    provided: {}
  }

  handleClick = () => {
    const { tabId, onClick } = this.props;

    onClick(tabId);
  }

  handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      this.handleClick();
    }
  }

  render() {
    const { children, active, darkMode, provided, disabled } = this.props;

    return (
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
      <li
        className={ classNames(
          'tab-bar__tab',
          active && 'tab-bar__tab--active',
          darkMode && 'tab-bar__tab--dark-mode',
          disabled && 'tab-bar__tab--disabled'
        ) }
        onClick={ this.handleClick }
        onKeyDown={ this.handleKeyDown }
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={ disabled ? '-1' : '0' }
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
        role="button"
        { ...provided.draggableProps }
        ref={ provided.innerRef }
      >
        { children }
      </li>
    );
  }
}
