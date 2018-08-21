import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Headline extends Component {
  render() {
    const { className, children, type, onClick, noMargin, id } = this.props;
    const CustomTag = `h${type}`;

    return (
      <CustomTag
        className={ classNames(`headline headline--h${type}`, className && className, noMargin && 'headline--no-margin') }
        onClick={ onClick && onClick }
        id={ id }
      >
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
  onClick: PropTypes.func,
  noMargin: PropTypes.bool,
  id: PropTypes.string
};

Headline.defaultProps = {
  type: '1'
};
