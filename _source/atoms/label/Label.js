import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Label extends Component {
  render() {
    const { children, htmlFor, className } = this.props;

    return (
      <label className={ classNames('label', className && className) } htmlFor={ htmlFor }>
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
  className: PropTypes.string
};
