import React, { PropTypes, Component } from 'react';
import './styles/a-icon.scss';

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
    const PROPS = this.props;
    const LINK = 'images/symbol-defs.svg#icon-' + PROPS.icon;
    const CLASS = 'a-icon ' + PROPS.className;
    const LABEL = PROPS.label ? <label className="a-icon__label">{ PROPS.label }</label> : '';

    return (
      <div className={ CLASS } title={ PROPS.title } onClick={ this.onIconClick }>
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
  'stopPropagation': PropTypes.bool
};

Icon.defaultProps = {
  'className': '',
  'title': ''
};
