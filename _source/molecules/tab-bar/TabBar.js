import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class TabBar extends Component {
  render() {
    const { className } = this.props;

    return (
      <div className={ classNames('tab-bar', className && className) }>
        { this.props.children }
      </div>
    );
  }
}

TabBar.propTypes = {
  children: PropTypes.array.isRequired,
  className: PropTypes.string
};
