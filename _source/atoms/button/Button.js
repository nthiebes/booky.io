import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../icon';
import Link from '../link';

export default class Button extends Component {
  render() {
    const { size, icon, className, color, onButtonClick, href, children } = this.props;
    const CustomTag = href ? Link : 'div';

    return (
      <CustomTag
        className={ classNames('button', `button--${size}`, `button--${size}-${color}`, className) }
        onClick={ onButtonClick }
        href={ href }>
        { icon && <Icon icon={ icon } color={ size === 'small' ? color : 'light' } className="button__icon" /> }
        <span className="button__text">{ children }</span>
      </CustomTag>
    );
  }
}

Button.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string.isRequired,
  href: PropTypes.string,
  onButtonClick: PropTypes.func,
  size: PropTypes.string.isRequired,
  icon: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string
  ]).isRequired
};

Button.defaultProps = {
  className: '',
  href: ''
};
