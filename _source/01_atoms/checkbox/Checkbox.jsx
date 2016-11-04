import React, { PropTypes, Component } from 'react';

/**
 * React component
 * @class 01_atoms/checkbox/Checkbox
 *
 * @prop {string}   [className]     Optional class name
 * @prop {string}   [label]         Label text
 * @prop {function} onCheckboxClick Click callback
 */
export default class Checkbox extends Component {
    render() {
        const PROPS = this.props;
        const CLASS = 'a-checkbox ' + PROPS.className;
        const BOX_CLASS = PROPS.checked ? 'a-checkbox__box a-checkbox__box--checked' : 'a-checkbox__box';

        return (
            <div className={ CLASS } onClick={ PROPS.onCheckboxClick } >
                <span className={ BOX_CLASS } />
                <label className="a-checkbox__label">{ PROPS.label }</label>
            </div>
        );
    }
}

Checkbox.propTypes = {
    'label': PropTypes.string,
    'className': PropTypes.string,
    'onCheckboxClick': PropTypes.func.isRequired
};

Checkbox.defaultProps = {
    'label': '',
    'className': ''
};
