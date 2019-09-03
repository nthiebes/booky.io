import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage, FormattedHTMLMessage, injectIntl } from 'react-intl';

import Icon from '../../../atoms/icon';
import { H3 } from '../../../atoms/headline';
import { ButtonSmallPrimary } from '../../../atoms/button';
import Skeleton from '../../../atoms/skeleton';

class DashboardsSidebar extends Component {
  constructor(props) {
    super(props);

    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.onIconClick = this.onIconClick.bind(this);
    this.addDashboard = this.addDashboard.bind(this);
    this.state = {
      editMode: false
    };
  }

  toggleEditMode() {
    this.setState({
      editMode: !this.state.editMode
    });
  }

  onIconClick(type, dashboard) {
    const { openModal } = this.props;

    openModal(type, {
      id: dashboard.id,
      name: dashboard.name
    });
  }

  handleKeyDown(event, dashboardId) {
    const { changeDashboard } = this.props;
    const { editMode } = this.state;

    !editMode && event.key === 'Enter' && changeDashboard(dashboardId);
  }

  addDashboard() {
    this.props.openModal('AddDashboard');
  }

  render() {
    const {
      dashboards,
      changeDashboard,
      intl,
      activeId,
      pinned,
      useTabIndex,
      darkMode
    } = this.props;
    const { editMode } = this.state;
    const noDashboards = dashboards.length === 0;

    return (
      <Fragment>
        <div className={ classNames('dashboards__headline-wrapper', !pinned && 'dashboards__headline-wrapper--hidden') }>
          <H3 className="dashboards__headline">
            <FormattedMessage id="dashboard.title" />
          </H3>
          <Icon
            icon={ editMode ? 'close' : 'more-horiz' }
            title={ editMode ? intl.formatMessage({ id: 'dashboard.editModeQuit' }) : intl.formatMessage({ id: 'dashboard.editMode' }) }
            onClick={ this.toggleEditMode }
            tabIndex={ useTabIndex || pinned ? '0' : '-1' }
            isButton
            useSkeleton={ noDashboards }
          />
        </div>
        <ul className={ classNames(
          'dashboards__list',
          editMode && 'dashboards__list--edit-mode',
          !pinned && 'dashboards__list--hidden'
        ) }>
          { dashboards.map((dashboard, index) => (
            <li
              key={ index }
              className={ classNames(
                'dashboards__item',
                dashboard.id === activeId && 'dashboards__item--active',
                darkMode && 'dashboards__item--dark-mode'
              ) }
              onClick={ () => { !editMode && changeDashboard(dashboard.id); } }
              onKeyDown={ (event) => { this.handleKeyDown(event, dashboard.id); } }
              tabIndex={ (useTabIndex || pinned) && !editMode ? '0' : '-1' }
            >
              <label className={ classNames('dashboards__label', darkMode && 'dashboards__label--dark-mode') }>
                { dashboard.name }
              </label>
              <Icon
                className="dashboards__icon"
                icon="edit"
                title={ intl.formatMessage({ id: 'dashboard.edit' }) }
                stopPropagation
                onClick={ () => this.onIconClick('EditDashboard', dashboard) }
                tabIndex={ (useTabIndex || pinned) && editMode ? '0' : '-1' }
                isButton
              />
              <Icon
                className="dashboards__icon dashboards__icon--delete"
                icon="delete"
                title={ intl.formatMessage({ id: 'dashboard.delete' }) }
                stopPropagation
                onClick={ () => this.onIconClick('DeleteDashboard', dashboard) }
                tabIndex={ (useTabIndex || pinned) && editMode ? '0' : '-1' }
                isButton
              />
            </li>
          )) }
          { noDashboards && (
            <Fragment>
              <li className={ classNames('dashboards__item', darkMode && 'dashboards__item--dark-mode') }>
                <Skeleton />
              </li>
              <li className={ classNames('dashboards__item', darkMode && 'dashboards__item--dark-mode') }>
                <Skeleton />
              </li>
              <li className={ classNames('dashboards__item', darkMode && 'dashboards__item--dark-mode') }>
                <Skeleton />
              </li>
            </Fragment>
          ) }
        </ul>
        <ButtonSmallPrimary
          icon="add"
          className="dashboards__button"
          onClick={ this.addDashboard }
          tabIndex={ useTabIndex || pinned ? '0' : '-1' }
          useSkeleton={ noDashboards }
        >
          <FormattedHTMLMessage id="dashboard.add" />
        </ButtonSmallPrimary>
      </Fragment>
    );
  }
}

export default injectIntl(DashboardsSidebar);

DashboardsSidebar.propTypes = {
  openModal: PropTypes.func.isRequired,
  changeDashboard: PropTypes.func.isRequired,
  dashboards: PropTypes.array,
  intl: PropTypes.object.isRequired,
  pinned: PropTypes.bool,
  activeId: PropTypes.number,
  useTabIndex: PropTypes.bool,
  darkMode: PropTypes.bool.isRequired
};

DashboardsSidebar.defaultProps = {
  dashboards: [],
  useTabIndex: false
};
