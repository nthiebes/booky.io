import React, { PropTypes, Component } from 'react';
import Icon from '../icon/Icon.jsx';
import './styles/a-button.scss';

/**
 * React component
 * 
 * @class Button
 * @classdesc atoms/button/Button
 */
export default class Button extends Component {
  render() {
    const PROPS = this.props;
    const CLASS = `a-button a-button--${PROPS.size} a-button--${PROPS.size}-${PROPS.color} ${PROPS.className}`;
    const ICON = PROPS.icon ? <Icon icon={ PROPS.icon } className="a-button__icon" /> : '';
    const TEXT = PROPS.text;
    const BUZZWORD = PROPS.buzzword;

    return (
      <div className={ CLASS } onClick={ PROPS.onButtonClick }>
        { ICON }
        <span className="a-button__text">{ TEXT }</span>
        <span className="a-button__text a-button__text--buzzword">{ BUZZWORD }</span>
      </div>
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
  'onButtonClick': PropTypes.func
};

Button.defaultProps = {
  'buzzword': '',
  'className': '',
  'color': 'primary',
  'size': 'small',
  'text': ''
};
