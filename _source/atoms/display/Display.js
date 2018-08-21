import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Display extends Component {
  render() {
    const { className, children } = this.props;

    return (
      <p className={ classNames('display', className && className) }>
        { children }
      </p>
    );
  }
}

Display.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string
  ]).isRequired
};
