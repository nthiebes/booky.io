import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../../atoms/icon';
import { H3 } from '../../atoms/headline';
import { ButtonSmallMedium } from '../../atoms/button';

export default class Dashboards extends Component {
  constructor(props) {
    super(props);

    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.state = {
      editMode: false
    };
  }

  toggleEditMode() {
    this.setState({
      editMode: !this.state.editMode
    });
  }

  render() {
    const { dashboards, openModal, changeDashboard, className } = this.props;
    const { editMode } = this.state;

    return (
      <aside className={ className }>
        <div className="dashboards__headline-wrapper">
          <H3 className="menu__headline">{ 'Dashboards' }</H3>
          <Icon
            className={ editMode ? '' : 'menu__edit-icon--hide' }
            icon="close"
            title="Quit edit mode"
            onClick={ this.toggleEditMode }
          />
          <Icon
            className={ editMode ? 'menu__edit-icon--hide' : '' }
            icon="more-horiz"
            title="Edit mode"
            onClick={ this.toggleEditMode }
          />
        </div>
        <ul className={ classNames('dashboards__list', editMode && 'dashboards__list--edit-mode') }>
          { dashboards.items.map((dashboard, index) => (
            <div
              key={ index }
              className={ classNames('dashboards__item', dashboard.id === dashboards.active && 'dashboards__item--active') }
              onClick={ () => { !editMode && changeDashboard(dashboard.id); } }>
              <label className="dashboards__label">{ dashboard.name }</label>
              <Icon
                className="menu__icon"
                icon="edit"
                title="Edit dashboard"
                stopPropagation
                onClick={ () => { openModal('EditDashboard', {
                  id: dashboard.id,
                  name: dashboard.name
                }); } }
              />
              <Icon
                className="menu__icon"
                icon="delete"
                title="Delete dashboard"
                stopPropagation
                onClick={ () => { openModal('DeleteDashboard', {
                  id: dashboard.id,
                  name: dashboard.name
                }); } }
              />
            </div>
          )) }
          <ButtonSmallMedium
            className="menu__button"
            onClick={ () => { openModal('AddDashboard'); } }>
            { 'Add ' }<b>{ 'dashboard' }</b>
          </ButtonSmallMedium>
        </ul>
      </aside>
    );
  }
}

Dashboards.propTypes = {
  openModal: PropTypes.func.isRequired,
  changeDashboard: PropTypes.func.isRequired,
  dashboards: PropTypes.object,
  className: PropTypes.string
};

Dashboards.defaultProps = {
  dashboards: [],
  className: ''
};
