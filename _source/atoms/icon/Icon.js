import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Icon extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleClick(event) {
    const { stopPropagation, onClick } = this.props;

    if (stopPropagation) {
      event.stopPropagation();
    }

    if (onClick) {
      onClick();
    }
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.handleClick(event);
    }
  }

  render() {
    const { icon, className, label, color, title, dragHandleProps, tabIndex } = this.props;
    const link = '_assets/symbol-defs.svg#icon-' + icon;

    return (
      <span
        className={ classNames('icon', `icon--${color}`, className && className) }
        title={ title }
        onClick={ this.handleClick }
        onKeyPress={ this.handleKeyPress }
        tabIndex={ tabIndex }
        { ...dragHandleProps }
      >
        <svg className={ classNames('icon__svg', icon === 'spinner' && 'icon__svg--spinner') }>
          <use xlinkHref={ link } />
        </svg>
        { label && <label className="icon__label">{ label }</label> }
      </span>
    );
  }
}

Icon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string,
  stopPropagation: PropTypes.bool,
  color: PropTypes.string,
  dragHandleProps: PropTypes.object,
  tabIndex: PropTypes.string
};

Icon.defaultProps = {
  color: 'medium'
};
