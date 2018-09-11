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
    this.toggleOpen = this.toggleOpen.bind(this);
    this.state = {
      editMode: false
    };
  }

  toggleEditMode() {
    this.setState({
      editMode: !this.state.editMode
    });
  }

  toggleOpen() {
    this.props.toggleDashboardOpen();
  }

  render() {
    const { dashboards, openModal, changeDashboard, className, intl, activeId, open } = this.props;
    const { editMode } = this.state;

    return (
      <aside className={ classNames('dashboards', className && className, !open && 'dashboards--hide') }>
        <header className="dashboards__header booky--hide-mobile-tablet">
          <Icon
            icon={ open ? 'back' : 'forward' }
            onClick={ this.toggleOpen }
            title={ open ? intl.formatMessage({ id: 'dashboard.reduce' }) : intl.formatMessage({ id: 'dashboard.expand' }) }
          />
        </header>
        <hr className="dashboards__hr booky--hide-mobile-tablet" />
        <div className="dashboards__headline-wrapper">
          <H3 className="dashboards__headline"><FormattedMessage id="dashboard.title" /></H3>
          <Icon
            icon={ editMode ? 'close' : 'more-horiz' }
            title={ editMode ? intl.formatMessage({ id: 'dashboard.editModeQuit' }) : intl.formatMessage({ id: 'dashboard.editMode' }) }
            onClick={ this.toggleEditMode }
          />
        </div>
        <ul className={ classNames('dashboards__list', editMode && 'dashboards__list--edit-mode') }>
          { dashboards.map((dashboard, index) => (
            <li
              key={ index }
              className={ classNames('dashboards__item', dashboard.id === activeId && 'dashboards__item--active') }
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
  dashboards: PropTypes.array,
  className: PropTypes.string,
  intl: PropTypes.object.isRequired,
  open: PropTypes.bool,
  activeId: PropTypes.number,
  toggleDashboardOpen: PropTypes.func.isRequired
};

Dashboards.defaultProps = {
  dashboards: []
};
