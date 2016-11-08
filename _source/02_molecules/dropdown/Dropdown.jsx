import React, { PropTypes, Component } from 'react';

/**
 * React component
 * @class 02_molecules/dropdown/Dropdown
 *
 * @prop {array}    options          An array of options
 * @prop {function} onDropdownChange Dropdown change callback
 * @prop {number}   [selectedKey]    The selected option
 * @prop {string}   [className]      Optional class name
 */
export default class Dropdown extends Component {
    constructor(props) {
        super(props);

        this.onSelectChange = this.onSelectChange.bind(this);
    }

    onSelectChange(event) {
        const value = parseInt(event.target.value, 10);

        this.props.onDropdownChange(value);
    }

    render() {
        const PROPS = this.props;
        const CLASS = 'm-dropdown ' + PROPS.className;

        return (
            <select className={ CLASS } onChange={ this.onSelectChange } value={ PROPS.selectedKey }>
                {PROPS.options.map((option, index) =>
                    <option className="m-dropdown__option" value={ index } key={ index }>{ option.name }</option>
                )}
            </select>
        );
    }
}

Dropdown.propTypes = {
    'className': PropTypes.string,
    'selectedKey': PropTypes.number,
    'options': PropTypes.array.isRequired,
    'onDropdownChange': PropTypes.func.isRequired
};

Dropdown.defaultProps = {
    'className': '',
    'selectedKey': 0
};
