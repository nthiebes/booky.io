import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Paragraph extends Component {
  render() {
    const { children, className } = this.props;

    return (
      <p className={ `paragraph ${className}` }>
        { children }
      </p>
    );
  }
}

Paragraph.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array
  ]).isRequired
};

Paragraph.defaultProps = {
  className: ''
};
