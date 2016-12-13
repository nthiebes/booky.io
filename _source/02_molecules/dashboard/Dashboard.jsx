import React, { PropTypes, Component } from 'react';

import Icon from '../../01_atoms/icon/Icon.jsx';

/**
 * React component
 * 
 * @class Dashboard
 * @classdesc 02_molecules/dashboard/Dashboard
 *
 * @requires 01_atoms/icon/Icon
 *
 * @prop {boolean}  isActive         Active dashboard
 * @prop {function} onDashboardClick Dashboard click callback
 * @prop {number}   id
 * @prop {string}   name
 */
export default class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.onDashboardClick = this.onDashboardClick.bind(this);
    }

    onDashboardClick() {
        this.props.onDashboardClick(this.props.id);
    }

    render() {
        const PROPS = this.props;
        const ACTIVE_CLASS = PROPS.isActive ? 'm-dashboard--active' : '';
        const CLASS = ACTIVE_CLASS + ' m-dashboard';

        return (
            <li className={ CLASS }>
                <span className="m-dashboard__title" title={ PROPS.name } onClick={ this.onDashboardClick }>{ PROPS.name }</span>
                <Icon icon="edit" className="m-dashboard__icon m-dashboard__icon--edit a-icon--light" title="Edit dashboard" />
                <Icon icon="delete" className="m-dashboard__icon m-dashboard__icon--delete a-icon--light" title="Delete dashboard" />
                <Icon icon="drag" className="m-dashboard__icon m-dashboard__icon--drag a-icon--light" title="Drag dashboard" />
            </li>
        );
    }
}

Dashboard.propTypes = {
    'id': PropTypes.number.isRequired,
    'name': PropTypes.string.isRequired,
    'onDashboardClick': PropTypes.func.isRequired,
    'isActive': PropTypes.bool.isRequired
};
