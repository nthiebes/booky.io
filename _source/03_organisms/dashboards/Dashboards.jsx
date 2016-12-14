import React, { PropTypes, Component } from 'react';

import Dashboard from '../../02_molecules/dashboard/Dashboard.jsx';
import Button from '../../01_atoms/button/Button.jsx';

/**
 * React component
 * 
 * @class Dashboards
 * @classdesc 03_organisms/dashboards/Dashboards
 *
 * @requires 01_atoms/button/Button
 * @requires 02_molecules/dashboard/Dashboard
 *
 * @prop {array}    dashboards       Array of all dashboards
 * @prop {boolean}  editMode         Edit mode enabled/disabled
 * @prop {function} onDashboardClick Dashboard click callback
 * @prop {number}   activeDashboard  The active dashboard
 * @prop {number}   activePosition   0 for sidebar, 1 for dropdown
 * @prop {number}   position         0 for sidebar, 1 for dropdown
 */
export default class Dashboards extends Component {
    getClassName() {
        const PROPS = this.props,
            SIDEBAR_OPEN_CLASS = PROPS.sidebarOpen ? ' o-dashboards--sidebar-open' : '';
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

        className += SIDEBAR_OPEN_CLASS;

        return className;
    }

    render() {
        const PROPS = this.props;
        const DASHBOARDS = PROPS.dashboards;
        const CLASS = this.getClassName();

        return (
            <aside className={ CLASS }>
                <ul className="o-dashboards__list">
                    <li className="o-dashboards__title">{ 'Dashboards' }</li>
                    {DASHBOARDS.map((dashboard) =>
                        <Dashboard 
                            key={ dashboard.id } { ...dashboard } 
                            onDashboardClick={ PROPS.onDashboardClick } 
                            isActive={ this.props.activeDashboard === dashboard.id } 
                            editMode={ PROPS.editMode }
                        />
                    )}
                    <li className="o-dashboards__button-wrapper">
                        <Button text="Add" buzzword="dashboard" className="o-dashboards__button" />
                    </li>
                </ul>
            </aside>
        );
    }
}

Dashboards.propTypes = {
    'position': PropTypes.number.isRequired,
    'activePosition': PropTypes.number.isRequired,
    'dashboards': PropTypes.array.isRequired,
    'onDashboardClick': PropTypes.func.isRequired,
    'activeDashboard': PropTypes.number.isRequired,
    'editMode': PropTypes.bool.isRequired
};
