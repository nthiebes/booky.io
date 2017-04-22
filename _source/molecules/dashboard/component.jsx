import React, { PropTypes, Component } from 'react';
import Icon from '../../atoms/icon';
import './styles/m-dashboard.scss';

/**
 * React component
 * 
 * @class Dashboard
 * @classdesc molecules/dashboard/Dashboard
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
    const ACTIVE_CLASS = PROPS.isActive ? ' m-dashboard--active' : '';
    const EDIT_MODE_CLASS = PROPS.editMode ? ' m-dashboard--edit-mode' : '';
    const CLASS = 'm-dashboard' + ACTIVE_CLASS + EDIT_MODE_CLASS;

    return (
      <li className={ CLASS }>
        <span className="m-dashboard__title" title={ PROPS.name } onClick={ this.onDashboardClick }>{ PROPS.name }</span>
        <Icon icon="edit" className="m-dashboard__icon m-dashboard__icon--edit-mode a-icon--light" title="Edit dashboard" />
        <Icon icon="delete" className="m-dashboard__icon m-dashboard__icon--edit-mode a-icon--light" title="Delete dashboard" />
        <Icon icon="drag" className="m-dashboard__icon m-dashboard__icon--edit-mode a-icon--light" title="Drag dashboard" />
      </li>
    );
  }
}

Dashboard.propTypes = {
  'id': PropTypes.number.isRequired,
  'name': PropTypes.string.isRequired,
  'onDashboardClick': PropTypes.func.isRequired,
  'isActive': PropTypes.bool.isRequired,
  'editMode': PropTypes.bool.isRequired
};
