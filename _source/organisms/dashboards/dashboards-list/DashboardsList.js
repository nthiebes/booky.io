import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage, FormattedHTMLMessage, injectIntl } from 'react-intl';
import { Draggable, Droppable } from 'react-beautiful-dnd';

import Icon from '../../../atoms/icon';
import { H2 } from '../../../atoms/headline';
import { ButtonSmallPrimary } from '../../../atoms/button';
import Skeleton from '../../../atoms/skeleton';

class DashboardsList extends PureComponent {
  static propTypes = {
    openModal: PropTypes.func.isRequired,
    changeDashboard: PropTypes.func.isRequired,
    dashboards: PropTypes.array,
    intl: PropTypes.object.isRequired,
    pinned: PropTypes.bool,
    activeId: PropTypes.number,
    useTabIndex: PropTypes.bool,
    darkMode: PropTypes.bool.isRequired
  }
  
  static defaultProps = {
    useTabIndex: false
  }

  state = {
    editMode: false
  }

  toggleEditMode = () => {
    this.setState({
      editMode: !this.state.editMode
    });
  }

  onIconClick = (type, dashboard) => {
    const { openModal } = this.props;

    openModal(type, {
      id: dashboard.id,
      name: dashboard.name
    });
  }

  handleKeyDown = (event, dashboardId) => {
    const { changeDashboard } = this.props;
    const { editMode } = this.state;

    if (!editMode && event.key === 'Enter') {
      window.scrollTo(0, 0);
      changeDashboard(dashboardId);
    }
  }

  addDashboard = () => {
    this.props.openModal('AddDashboard');
  }

  handleDashboardClick = (dashboardId) => {
    const { changeDashboard } = this.props;
    const { editMode } = this.state;

    return () => {
      if (!editMode) {
        window.scrollTo(0, 0);
        changeDashboard(dashboardId);
      }
    };
  }

  render() {
    const {
      dashboards,
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
          <H2 style="h3" className="dashboards__headline">
            <FormattedMessage id="dashboard.title" />
          </H2>
          <Icon
            icon={ editMode ? 'close' : 'more-horiz' }
            label={ editMode ? intl.formatMessage({ id: 'dashboard.editModeQuit' }) : intl.formatMessage({ id: 'dashboard.editMode' }) }
            onClick={ this.toggleEditMode }
            tabIndex={ useTabIndex || pinned ? '0' : '-1' }
            isButton
            useSkeleton={ noDashboards }
          />
        </div>
        <Droppable droppableId="dashboards" type="dashboard">
          { (providedDroppable) => (
            <ul
              className={ classNames(
                'dashboards__list',
                editMode && 'dashboards__list--edit-mode',
                !pinned && 'dashboards__list--hidden'
              ) }
              ref={ providedDroppable.innerRef }
              { ...providedDroppable.droppableProps }
            >
              { dashboards.map((dashboard, index) => (
                <Draggable
                  index={ index }
                  draggableId={ `dashboard-${dashboard.id}` }
                  key={ `dashboard-${dashboard.id}` }
                  disableInteractiveElementBlocking
                >
                  { (provided) => (
                    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                    <li
                      key={ dashboard.id }
                      className={ classNames(
                        'dashboards__item',
                        dashboard.id === activeId && 'dashboards__item--active',
                        darkMode && 'dashboards__item--dark-mode'
                      ) }
                      onClick={ this.handleDashboardClick(dashboard.id) }
                      onKeyDown={ (event) => { this.handleKeyDown(event, dashboard.id); } }
                      tabIndex={ (useTabIndex || pinned) && !editMode ? '0' : '-1' }
                      { ...provided.draggableProps }
                      ref={ provided.innerRef }
                    >
                      <label className={ classNames('dashboards__label', darkMode && 'dashboards__label--dark-mode') }>
                        { dashboard.name }
                      </label>
                      <Icon
                        className="dashboards__icon"
                        icon="edit"
                        label={ intl.formatMessage({ id: 'dashboard.edit' }) }
                        stopPropagation
                        onClick={ () => this.onIconClick('EditDashboard', dashboard) }
                        tabIndex={ (useTabIndex || pinned) && editMode ? '0' : '-1' }
                        isButton
                      />
                      <Icon
                        className="dashboards__icon dashboards__icon--delete"
                        icon="delete"
                        label={ intl.formatMessage({ id: 'dashboard.delete' }) }
                        stopPropagation
                        onClick={ () => this.onIconClick('DeleteDashboard', dashboard) }
                        tabIndex={ (useTabIndex || pinned) && editMode ? '0' : '-1' }
                        isButton
                      />
                      <Icon
                        className="dashboards__icon"
                        icon="drag"
                        label={ intl.formatMessage({ id: 'dashboard.drag' }) }
                        dragHandleProps={ provided.dragHandleProps }
                        tabIndex={ (useTabIndex || pinned) && editMode ? '0' : '-1' }
                        isButton
                      />
                    </li>
                  ) }
                </Draggable>
              )) }
              { noDashboards && (
                <Fragment>
                  <li className="dashboards__item--pending">
                    <Skeleton />
                  </li>
                  <li className="dashboards__item--pending">
                    <Skeleton />
                  </li>
                  <li className="dashboards__item--pending">
                    <Skeleton />
                  </li>
                </Fragment>
              ) }
              { providedDroppable.placeholder }
            </ul>
          ) }
        </Droppable>
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

export default injectIntl(DashboardsList);
