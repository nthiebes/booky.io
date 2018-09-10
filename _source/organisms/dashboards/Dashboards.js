import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage, FormattedHTMLMessage, injectIntl } from 'react-intl';

import Icon from '../../atoms/icon';
import { H3 } from '../../atoms/headline';
import { ButtonSmallPrimary } from '../../atoms/button';

class Dashboards extends Component {
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
    const { dashboards, openModal, changeDashboard, className, intl } = this.props;
    const { editMode } = this.state;

    return (
      <aside className={ className }>
        <div className="dashboards__headline-wrapper">
          <H3 className="dashboards__headline"><FormattedMessage id="dashboard.title" /></H3>
          <Icon
            className={ classNames(!editMode && 'booky--hide') }
            icon="close"
            title={ intl.formatMessage({ id: 'dashboard.editModeQuit' }) }
            onClick={ this.toggleEditMode }
          />
          <Icon
            className={ classNames(editMode && 'booky--hide') }
            icon="more-horiz"
            title={ intl.formatMessage({ id: 'dashboard.editMode' }) }
            onClick={ this.toggleEditMode }
          />
        </div>
        <ul className={ classNames('dashboards__list', editMode && 'dashboards__list--edit-mode') }>
          { dashboards.items.map((dashboard, index) => (
            <li
              key={ index }
              className={ classNames('dashboards__item', dashboard.id === dashboards.active && 'dashboards__item--active') }
              onClick={ () => { !editMode && changeDashboard(dashboard.id); } }>
              <label className="dashboards__label">{ dashboard.name }</label>
              <Icon
                className="dashboards__icon"
                icon="edit"
                title={ intl.formatMessage({ id: 'dashboard.edit' }) }
                stopPropagation
                onClick={ () => { openModal('EditDashboard', {
                  id: dashboard.id,
                  name: dashboard.name
                }); } }
              />
              <Icon
                className="dashboards__icon"
                icon="delete"
                title={ intl.formatMessage({ id: 'dashboard.delete' }) }
                stopPropagation
                onClick={ () => { openModal('DeleteDashboard', {
                  id: dashboard.id,
                  name: dashboard.name
                }); } }
              />
            </li>
          )) }
          <ButtonSmallPrimary icon="add" className="dashboards__button" onClick={ () => { openModal('AddDashboard'); } }>
            <FormattedHTMLMessage id="dashboard.add" />
          </ButtonSmallPrimary>
        </ul>
      </aside>
    );
  }
}

export default injectIntl(Dashboards);

Dashboards.propTypes = {
  openModal: PropTypes.func.isRequired,
  changeDashboard: PropTypes.func.isRequired,
  dashboards: PropTypes.object,
  className: PropTypes.string,
  intl: PropTypes.object.isRequired
};

Dashboards.defaultProps = {
  dashboards: []
};
