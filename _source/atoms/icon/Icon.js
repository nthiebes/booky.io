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
    const { icon, className, label, color, title, dragHandleProps } = this.props;
    const LINK = '_assets/symbol-defs.svg#icon-' + icon;
    const CLASS = classNames('icon', className, `icon--${color}`);
    const LABEL = label ? <label className="icon__label">{ label }</label> : '';

    return (
      <div className={ CLASS } title={ title } onClick={ this.onClick } { ...dragHandleProps }>
        <svg className="icon__svg">
          <use xlinkHref={ LINK } />
        </svg>
        { LABEL }
      </div>
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
  dragHandleProps: PropTypes.object
};

Icon.defaultProps = {
  className: '',
  title: '',
  color: 'medium'
};
