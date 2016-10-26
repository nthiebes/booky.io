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
    'title': PropTypes.string
};

Icon.defaultProps = {
    'className': '',
    'title': ''
};
