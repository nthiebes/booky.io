import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Tab extends Component {
  constructor(props) {
    super(props);

    this.onTabClick = this.onTabClick.bind(this);
  }

  onTabClick() {
    const { tabId, onClick } = this.props;

    onClick(tabId);
  }

  render() {
    const { name, active } = this.props;

    return (
      <li
        className={ classNames('tab-bar__tab', active && 'tab-bar__tab--active') }
        onClick={ this.onTabClick }>
        { name }
      </li>
    );
  }
}

Tab.propTypes = {
  name: PropTypes.string.isRequired,
  tabId: PropTypes.number.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};
