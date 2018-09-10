import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Icon extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    if (this.props.stopPropagation) {
      event.stopPropagation();
    }

    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  render() {
    const { icon, className, label, color, title, dragHandleProps, tabIndex } = this.props;
    const link = '_assets/symbol-defs.svg#icon-' + icon;

    return (
      <span
        className={ classNames('icon', `icon--${color}`, icon === 'spinner' && 'icon--spinner', className && className) }
        title={ title }
        onClick={ this.onClick }
        tabIndex={ tabIndex }
        { ...dragHandleProps }
      >
        <svg className="icon__svg">
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
