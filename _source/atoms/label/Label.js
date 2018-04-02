import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Label extends Component {
  render() {
    const { children, htmlFor } = this.props;

    return (
      <label className="label" htmlFor={ htmlFor }>{ children }</label>
    );
  }
}

Label.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.array
  ]).isRequired,
  htmlFor: PropTypes.string
};

Label.defaultProps = {
  htmlFor: ''
};
