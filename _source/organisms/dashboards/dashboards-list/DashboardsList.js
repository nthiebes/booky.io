/* eslint-disable max-lines */
import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage, injectIntl } from 'react-intl';
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
    darkMode: PropTypes.bool.isRequired,
    droppableIdSuffix: PropTypes.string.isRequired,
    closeEditMode: PropTypes.bool.isRequired,
    closeSidebar: PropTypes.func.isRequired,
    isDragging: PropTypes.bool,
    dragType: PropTypes.string,
    minimalBookmarkButton: PropTypes.bool
  };

  static defaultProps = {
    useTabIndex: false
  };

  state = {
    editMode: false
  };

  toggleEditMode = () => {
    this.setState({
      editMode: !this.state.editMode
    });
  };

  onIconClick = (type, dashboard) => {
    const { openModal, closeEditMode } = this.props;

    openModal(type, {
      id: dashboard.id,
      name: dashboard.name
    });

    if (closeEditMode) {
      this.setState({
        editMode: false
      });
    }
  };

  handleKeyDown = (event, dashboardId) => {
    const { changeDashboard } = this.props;
    const { editMode } = this.state;

    if (!editMode && event.key === 'Enter') {
      window.scrollTo(0, 0);
      changeDashboard(dashboardId);
    }
  };

  addDashboard = () => {
    this.props.openModal('AddDashboard');
  };

  handleDashboardClick = (dashboardId) => {
    const { changeDashboard } = this.props;
    const { editMode } = this.state;

    return () => {
      if (!editMode) {
        window.scrollTo(0, 0);
        changeDashboard(dashboardId);
      }
    };
  };

  render() {
    const {
      dashboards,
      intl,
      activeId,
      pinned,
      useTabIndex,
      darkMode,
      droppableIdSuffix,
      closeSidebar,
      isDragging,
      dragType,
      minimalBookmarkButton
    } = this.props;
    const { editMode } = this.state;
    const noDashboards = dashboards.length === 0;

    return (
      <Fragment>
        <div
          className={classNames(
            'dashboards__headline-wrapper',
            !pinned && 'dashboards__headline-wrapper--hidden'
          )}
        >
          <H2 style="h3" className="dashboards__headline">
            <FormattedMessage id="dashboard.title" />
          </H2>
          <Icon
            icon={editMode ? 'close' : 'more-horiz'}
            label={
              editMode
                ? intl.formatMessage({ id: 'dashboard.editModeQuit' })
                : intl.formatMessage({ id: 'dashboard.editMode' })
            }
            onClick={this.toggleEditMode}
            tabIndex={useTabIndex || pinned ? '0' : '-1'}
            isButton
            useSkeleton={noDashboards}
          />
          {minimalBookmarkButton && (
            <Icon
              icon="add-collection"
              label={intl.formatMessage(
                { id: 'dashboard.add' },
                {
                  b: (msg) => msg
                }
              )}
              onClick={this.addDashboard}
              tabIndex={useTabIndex || pinned ? '0' : '-1'}
              isButton
              useSkeleton={noDashboards}
            />
          )}
        </div>
        <Droppable
          droppableId={`dashboard-${droppableIdSuffix}`}
          type={`dashboard-${droppableIdSuffix}`}
        >
          {(providedDroppable) => (
            <ul
              className={classNames(
                'dashboards__list',
                editMode && 'dashboards__list--edit-mode',
                !pinned && 'dashboards__list--hidden'
              )}
              ref={providedDroppable.innerRef}
              {...providedDroppable.droppableProps}
            >
              {dashboards.map((dashboard, index) => (
                <Draggable
                  index={index}
                  draggableId={`dashboard-${droppableIdSuffix}-${dashboard.id}`}
                  key={`dashboard-${droppableIdSuffix}-${dashboard.id}`}
                  disableInteractiveElementBlocking
                  isDragDisabled={!editMode}
                >
                  {(provided) => {
                    const style = {
                      ...provided.draggableProps.style,
                      right: droppableIdSuffix === 'mobile' ? 0 : 'auto',
                      left: droppableIdSuffix === 'mobile' ? 'auto' : 0
                    };

                    return (
                      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                      <li
                        key={dashboard.id}
                        className={classNames(
                          'dashboards__item',
                          dashboard.id === activeId &&
                            'dashboards__item--active',
                          isDragging && 'dashboards__item--no-hover',
                          darkMode && 'dashboards__item--dark-mode'
                        )}
                        onClick={this.handleDashboardClick(dashboard.id)}
                        onKeyDown={(event) => {
                          this.handleKeyDown(event, dashboard.id);
                        }}
                        tabIndex={
                          (useTabIndex || pinned) && !editMode ? '0' : '-1'
                        }
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                        style={style}
                        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
                        role="button"
                      >
                        <Droppable
                          droppableId={`dashboard-${dashboard.id}`}
                          type="bookmark"
                          isDropDisabled={dashboard.id === activeId}
                        >
                          {(providedDroppableDashboard, snapshot) => (
                            <span
                              className={classNames(
                                'dashboards__label',
                                isDragging &&
                                  dragType === 'bookmark' &&
                                  dashboard.id !== activeId &&
                                  'category_bookmarks--drag',
                                snapshot.isDraggingOver &&
                                  'category_bookmarks--drag-active',
                                darkMode && 'dashboards__label--dark-mode'
                              )}
                              ref={providedDroppableDashboard.innerRef}
                              {...providedDroppableDashboard.droppableProps}
                            >
                              {dashboard.name}
                              <ul className="dashboards__placeholder">
                                {providedDroppableDashboard.placeholder}
                              </ul>
                            </span>
                          )}
                        </Droppable>
                        {editMode && (
                          <Fragment>
                            <Icon
                              icon="edit"
                              label={intl.formatMessage({
                                id: 'dashboard.edit'
                              })}
                              stopPropagation
                              onClick={() =>
                                this.onIconClick('EditDashboard', dashboard)
                              }
                              tabIndex={useTabIndex || pinned ? '0' : '-1'}
                              isButton
                            />
                            <Icon
                              className="dashboards__icon--delete"
                              icon="delete"
                              label={intl.formatMessage({
                                id: 'dashboard.delete'
                              })}
                              stopPropagation
                              onClick={() =>
                                this.onIconClick('DeleteDashboard', dashboard)
                              }
                              tabIndex={useTabIndex || pinned ? '0' : '-1'}
                              isButton
                            />
                            <Icon
                              className="dashboards__icon--drag"
                              icon="drag"
                              label={intl.formatMessage({
                                id: 'dashboard.drag'
                              })}
                              dragHandleProps={provided.dragHandleProps}
                              tabIndex={useTabIndex || pinned ? '0' : '-1'}
                              isButton
                            />
                          </Fragment>
                        )}
                      </li>
                    );
                  }}
                </Draggable>
              ))}
              {noDashboards && (
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
              )}
              {providedDroppable.placeholder}
            </ul>
          )}
        </Droppable>
        {!minimalBookmarkButton && (
          <ButtonSmallPrimary
            icon="add-collection"
            className="dashboards__button"
            onClick={this.addDashboard}
            tabIndex={useTabIndex || pinned ? '0' : '-1'}
            useSkeleton={noDashboards}
          >
            <FormattedMessage
              id="dashboard.add"
              values={{ b: (msg) => <b>{msg}</b> }}
            />
          </ButtonSmallPrimary>
        )}
        {dashboards.length === 1 && (
          <ButtonSmallPrimary
            icon="upload"
            className="dashboards__button-import"
            tabIndex={useTabIndex || pinned ? '0' : '-1'}
            useSkeleton={noDashboards}
            to="/account#import"
            onClick={closeSidebar}
          >
            <FormattedMessage id="account.import" />
          </ButtonSmallPrimary>
        )}
      </Fragment>
    );
  }
}

export default injectIntl(DashboardsList);
