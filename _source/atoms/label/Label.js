import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Label extends Component {
  render() {
    const { children, htmlFor, className, darkMode } = this.props;

    return (
      <label className={ classNames('label', darkMode && 'label--dark', className && className) } htmlFor={ htmlFor }>
        { children }
      </label>
    );
  }
}

Label.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.array
  ]).isRequired,
  htmlFor: PropTypes.string,
  className: PropTypes.string,
  darkMode: PropTypes.bool
};
