import React, { PropTypes, Component } from 'react';

/**
 * React component
 * @class 02_molecules/color-picker/ColorPicker
 *
 * @prop {boolean}  activeColor   The selected color
 * @prop {function} onColorChange Color change callback
 * @prop {string}   [className]   Additional class name
 */
export default class ColorPicker extends Component {
    constructor(props) {
        super(props);
        
        this.getColor = this.getColor.bind(this);
        this.onColorChange = this.onColorChange.bind(this);
    }

    onColorChange(key) {
        this.props.onColorChange(key);
    }

    getColor(color) {
        const ACTIVE_COLOR = this.props.activeColor;
        const ACTIVE_CLASS = ACTIVE_COLOR === color.key ? 'm-color-picker__color--active' : '';
        const CLASS = `m-color-picker__color m-color-picker__color--${color.key} ${ACTIVE_CLASS}`;

        /* eslint-disable react/jsx-no-bind */
        const ITEM = <span key={ color.key } className={ CLASS } onClick={ this.onColorChange.bind(this, color.key) } />;
        
        /* eslint-enable react/jsx-no-bind */
        return ITEM;
    }

    getColors() {
        const count = 8,
            colors = [];
        let index = 0;

        for (index; index <= count; index++) {
            colors.push({'key': index});
        }
        return colors;
    }

    render() {
        const PROPS = this.props;
        const CLASS = 'm-color-picker ' + PROPS.className;
        const COLORS = this.getColors();

        return (
            <div className={ CLASS }>
                {COLORS.map(this.getColor)}
            </div>
        );
    }
}

ColorPicker.propTypes = {
    'activeColor': PropTypes.number.isRequired,
    'className': PropTypes.string,
    'onColorChange': PropTypes.func.isRequired
};

ColorPicker.defaultProps = {
    'className': ''
};
