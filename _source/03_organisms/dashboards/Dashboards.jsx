import React, { PropTypes, Component } from 'react';

/**
 * React component
 * 
 * @class Dashboards
 * @classdesc 03_organisms/dashboards/Dashboards
 *
 * @prop {string} [className] Optional class name
 */
export default class Dashboards extends Component {
    getClassName() {
        const PROPS = this.props;
        let className = 'o-dashboards ';

        if (PROPS.position === 1) {
            className += 'o-dashboards--sidebar ';
        } else {
            className += 'o-dashboards--dropdown ';
        }

        if (PROPS.position === 1 && PROPS.activePosition === 1) {
            className += 'o-dashboards--sidebar-active';
        } else if (PROPS.position === 0 && PROPS.activePosition === 0) {
            className += 'o-dashboards--dropdown-active';
        }

        return className;
    }

    render() {
        const CLASS = this.getClassName();

        return (
            <aside className={ CLASS }>
                <ul className="o-dashboards__list">
                    <li className="o-dashboards__title">{ 'Dashboards' }</li>
                    <li className="o-dashboards__item">Dashboard 1</li>
                    <li className="o-dashboards__item">Dashboard loooooooooooong 2</li>
                    <li className="o-dashboards__item">Dashboard 3</li>
                    <li className="o-dashboards__item">{ 'Add dashboard' }</li>
                </ul>
            </aside>
        );
    }
}

Dashboards.propTypes = {
    'position': PropTypes.number.isRequired,
    'activePosition': PropTypes.number.isRequired
};
