import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class TabBar extends Component {
  render() {
    const { className } = this.props;

    return (
      <nav className={ classNames('tab-bar', className && className) }>
        <ul className="tab-bar__scroll-container">
          { this.props.children }
        </ul>
      </nav>
    );
  }
}

TabBar.propTypes = {
  children: PropTypes.array.isRequired,
  className: PropTypes.string
};
