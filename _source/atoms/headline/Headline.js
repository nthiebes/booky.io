import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Headline extends Component {
  render() {
    const { className, children, type } = this.props;
    const CustomTag = `h${type}`;

    return (
      <CustomTag className={ `headline headline--h${type} ${className}` }>
        { children }
      </CustomTag>
    );
  }
}

Headline.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string
  ]).isRequired,
  type: PropTypes.string
};

Headline.defaultProps = {
  className: '',
  type: '1'
};
