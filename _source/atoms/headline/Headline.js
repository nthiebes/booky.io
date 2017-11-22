import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Headline extends Component {
  render() {
    const { className, children, type, onClick } = this.props;
    const CustomTag = `h${type}`;

    return (
      <CustomTag className={ `headline headline--h${type} ${className}` } onClick={ onClick && onClick }>
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
  type: PropTypes.string,
  onClick: PropTypes.func
};

Headline.defaultProps = {
  className: '',
  type: '1'
};
