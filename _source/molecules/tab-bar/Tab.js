import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Tab extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleClick() {
    const { tabId, onClick } = this.props;

    onClick(tabId);
  }

  handleKeyDown(event) {
    if (event.key === 'Enter') {
      this.handleClick();
    }
  }

  render() {
    const { name, active, darkMode } = this.props;

    return (
      <li
        className={ classNames('tab-bar__tab', active && 'tab-bar__tab--active', darkMode && 'tab-bar__tab--dark-mode') }
        onClick={ this.handleClick }
        onKeyDown={ this.handleKeyDown }
        tabIndex="0"
      >
        { name }
      </li>
    );
  }
}

Tab.propTypes = {
  name: PropTypes.string.isRequired,
  tabId: PropTypes.number.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  darkMode: PropTypes.bool
};
