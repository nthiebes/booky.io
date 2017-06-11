import React, { PropTypes, Component } from 'react';
import Icon from '../icon';
import Link from '../link';

/**
 * React component
 * 
 * @class Button
 * @classdesc atoms/button/Button
 */
export default class Button extends Component {
  render() {
    const { size, icon, buzzword, className, color, text, onButtonClick, href } = this.props;
    const CLASS = `a-button a-button--${size} a-button--${size}-${color} ${className}`;
    const ICON = icon ? <Icon icon={ icon } className="a-button__icon" /> : '';
    const CustomTag = href ? Link : 'div';

    return (
      <CustomTag className={ CLASS } onClick={ onButtonClick } href={ href }>
        { ICON }
        <span className="a-button__text">{ text }</span>
        <span className="a-button__text a-button__text--buzzword">{ buzzword }</span>
      </CustomTag>
    );
  }
}

Button.propTypes = {
  'buzzword': PropTypes.string,
  'className': PropTypes.string,
  'color': PropTypes.string,
  'icon': PropTypes.string,
  'size': PropTypes.string,
  'text': PropTypes.string,
  'href': PropTypes.string,
  'onButtonClick': PropTypes.func
};

Button.defaultProps = {
  'buzzword': '',
  'className': '',
  'color': 'primary',
  'size': 'small',
  'text': '',
  'href': ''
};
