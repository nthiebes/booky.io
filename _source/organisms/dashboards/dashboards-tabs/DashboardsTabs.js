import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage, FormattedHTMLMessage, injectIntl } from 'react-intl';
import { Draggable, Droppable } from 'react-beautiful-dnd';

import Icon from '../../../atoms/icon';
import Skeleton from '../../../atoms/skeleton';
import { TabBar, Tab } from '../../../molecules/tab-bar';

class DashboardsTabs extends PureComponent {
  static propTypes = {
    openModal: PropTypes.func.isRequired,
    changeDashboard: PropTypes.func.isRequired,
    dashboards: PropTypes.array,
    intl: PropTypes.object.isRequired,
    activeId: PropTypes.number,
    darkMode: PropTypes.bool.isRequired
    // droppableIdSuffix: PropTypes.string.isRequired
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

    if (!editMode) {
      window.scrollTo(0, 0);
      changeDashboard(dashboardId);
    }
  }

  render() {
    const {
      dashboards,
      intl,
      activeId,
      darkMode
    } = this.props;
    const { editMode } = this.state;
    const noDashboards = dashboards.length === 0;

    return (
      <Fragment>
        <Icon
          icon="add-collection"
          label={ intl.formatMessage({ id: 'modal.addDashboard' }) }
          onClick={ this.addDashboard }
          useSkeleton={ noDashboards }
          isButton
        >
          <FormattedHTMLMessage id="dashboard.add" />
        </Icon>
        <Icon
          icon={ editMode ? 'close' : 'more-horiz' }
          label={ editMode ? intl.formatMessage({ id: 'dashboard.editModeQuit' }) : intl.formatMessage({ id: 'dashboard.editMode' }) }
          onClick={ this.toggleEditMode }
          isButton
          useSkeleton={ noDashboards }
        />
        <TabBar title="dashboard.title" className="dashboards-tabs">
          { dashboards.map((dashboard) => (
            <Tab
              key={ dashboard.id }
              tabId={ dashboard.id }
              active={ dashboard.id === activeId }
              onClick={ this.handleDashboardClick }
            >
              <span>{ dashboard.name }</span>
              { editMode && (
                <Fragment>
                  <Icon
                    icon="edit"
                    label={ intl.formatMessage({ id: 'dashboard.edit' }) }
                    stopPropagation
                    onClick={ () => this.onIconClick('EditDashboard', dashboard) }
                    isButton
                  />
                  <Icon
                    className="dashboards__icon--delete"
                    icon="delete"
                    label={ intl.formatMessage({ id: 'dashboard.delete' }) }
                    stopPropagation
                    onClick={ () => this.onIconClick('DeleteDashboard', dashboard) }
                    isButton
                  />
                  <Icon
                    className="dashboards__icon--drag"
                    icon="drag"
                    label={ intl.formatMessage({ id: 'dashboard.drag' }) }
                    // dragHandleProps={ provided.dragHandleProps }
                    isButton
                  />
                </Fragment>
              ) }
            </Tab>
          )) }
        </TabBar>
      </Fragment>
    );
  }
}

export default injectIntl(DashboardsTabs);
