import React, { PropTypes, Component } from 'react';

/**
 * React component
 * @class 02_molecules/color-picker/ColorPicker
 *
 * @prop {boolean} [activeColor] The selected color
 * @prop {boolean} defaultColor  The default color
 * @prop {string}  [className]   Additional class name
 */
export default class ColorPicker extends Component {
    constructor(props) {
        super(props);
        
        this.getColor = this.getColor.bind(this);
    }

    getColor(color) {
        const ACTIVE_COLOR = this.props.activeColor || this.props.defaultColor;
        const ACTIVE_CLASS = ACTIVE_COLOR === color.key ? 'm-color-picker__color--active' : '';
        const CLASS = `m-color-picker__color m-color-picker__color--${color.key} ${ACTIVE_CLASS}`;
        const ITEM = <span key={ color.key } className={ CLASS } />;

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
    'activeColor': PropTypes.number,
    'defaultColor': PropTypes.number.isRequired,
    'className': PropTypes.string
};

ColorPicker.defaultProps = {
    'className': ''
};
