import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { IndexLink } from 'react-router';
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
    const { dashboards, openModal, changeDashboard } = this.props;
    const { editMode } = this.state;

    return [
      <div key="0" className="menu__headline-wrapper">
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
      </div>,
      <ul key="1" className={ classNames('menu__dashboards', editMode && 'menu__dashboards--edit-mode') }>
        { dashboards.items.map((dashboard, index) => (
          <div key={ index } className={ `menu__item ${dashboard.id === dashboards.active ? 'menu__item--active' : ''}` }>
            <IndexLink className="menu__label" onClick={ () => { changeDashboard(dashboard.id); } } to="/">
              <label>{ dashboard.name }</label>
            </IndexLink>
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
    ];
  }
}

Dashboards.propTypes = {
  openModal: PropTypes.func.isRequired,
  changeDashboard: PropTypes.func.isRequired,
  dashboards: PropTypes.object
};

Dashboards.defaultProps = {
  dashboards: []
};
