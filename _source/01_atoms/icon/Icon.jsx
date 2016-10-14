import React, { PropTypes, Component } from 'react';

/**
 * React component
 * @class 01_atoms/icon/Icon
 *
 * @prop {string} [className] Additional class name
 * @prop {string} icon        Icon name
 * @prop {string} [label]     Button label
 * @prop {string} [onCLick]   Click callback
 */
export default class Icon extends Component {
    render() {
        const PROPS = this.props;
        const LINK = 'images/symbol-defs.svg#icon-' + PROPS.icon;
        const CLASS = 'a-icon ' + PROPS.className;
        const LABEL = PROPS.label ? <label className="a-icon__label">{ PROPS.label }</label> : '';

        return (
            <div className={ CLASS } onClick={ PROPS.onClick ? PROPS.onClick : '' }>
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
    'onClick': PropTypes.func
};

Icon.defaultProps = {
    'className': ''
};
