import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * React component
 * 
 * @class Icon
 * @classdesc atoms/icon/Icon
 */
export default class Icon extends Component {
  constructor(props) {
    super(props);

    this.onIconClick = this.onIconClick.bind(this);
  }

  onIconClick(event) {
    if (this.props.stopPropagation) {
      event.stopPropagation();
    }

    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  render() {
    const { icon, className, label, color, title } = this.props;
    const LINK = '_assets/symbol-defs.svg#icon-' + icon;
    const CLASS = classNames('a-icon', className, `a-icon--${color}`);
    const LABEL = label ? <label className="a-icon__label">{ label }</label> : '';

    return (
      <div className={ CLASS } title={ title } onClick={ this.onIconClick }>
        <svg className="a-icon__svg">
          <use xlinkHref={ LINK } />
        </svg>
        { LABEL }
      </div>
    );
  }
}

Icon.propTypes = {
  'className': PropTypes.string,
  'icon': PropTypes.string.isRequired,
  'label': PropTypes.string,
  'onClick': PropTypes.func,
  'title': PropTypes.string,
  'stopPropagation': PropTypes.bool,
  color: PropTypes.string
};

Icon.defaultProps = {
  className: '',
  title: '',
  color: 'dark'
};
