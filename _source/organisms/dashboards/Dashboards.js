import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage, FormattedHTMLMessage, injectIntl } from 'react-intl';

// import fetcher from '../../_utils/fetcher';
import Icon from '../../atoms/icon';
import { H3 } from '../../atoms/headline';
import { ButtonSmallPrimary } from '../../atoms/button';

class Dashboards extends Component {
  constructor(props) {
    super(props);

    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
    this.onIconClick = this.onIconClick.bind(this);
    this.state = {
      editMode: false
    };
  }

  // componentDidMount() {
  //   fetcher({
  //     url: '/dashboards',
  //     onSuccess: (data) => {
  //       console.log('success', data);
  //     },
  //     onError: (error) => {
  //       console.log('error:', error);
  //     }
  //   });
  // }

  toggleEditMode() {
    this.setState({
      editMode: !this.state.editMode
    });
  }

  toggleOpen() {
    const { open, toggleDashboardOpen } = this.props;

    toggleDashboardOpen(!open);
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

  render() {
    const { dashboards, openModal, changeDashboard, className, intl, activeId, open, useTabIndex, isSidebar } = this.props;
    const { editMode } = this.state;

    return (
      <aside className={ classNames(
        'dashboards',
        isSidebar && 'dashboards--sidebar',
        !open && 'dashboards--hide',
        className && className
      ) }>
        { isSidebar && (
          <header className="dashboards__header booky--hide-mobile-tablet">
            <ButtonSmallPrimary
              icon="add"
              className="dashboards__button"
              onClick={ () => { openModal('AddDashboard'); } }
              tabIndex={ useTabIndex ? '0' : '-1' }
            >
              <FormattedHTMLMessage id="dashboard.add" />
            </ButtonSmallPrimary>
            <Icon
              icon={ open ? 'back' : 'forward' }
              onClick={ this.toggleOpen }
              title={ open ? intl.formatMessage({ id: 'dashboard.reduce' }) : intl.formatMessage({ id: 'dashboard.expand' }) }
              tabIndex={ useTabIndex ? '0' : '-1' }
            />
          </header>
        )}
        <hr className="dashboards__hr booky--hide-mobile-tablet" />
        <div className="dashboards__scroll-wrapper">
          <div className="dashboards__headline-wrapper">
            <H3 className="dashboards__headline"><FormattedMessage id="dashboard.title" /></H3>
            <Icon
              icon={ editMode ? 'close' : 'more-horiz' }
              title={ editMode ? intl.formatMessage({ id: 'dashboard.editModeQuit' }) : intl.formatMessage({ id: 'dashboard.editMode' }) }
              onClick={ this.toggleEditMode }
              tabIndex={ useTabIndex ? '0' : '-1' }
            />
          </div>
          <ul className={ classNames('dashboards__list', editMode && 'dashboards__list--edit-mode') }>
            { dashboards.map((dashboard, index) => (
              <li
                key={ index }
                className={ classNames('dashboards__item', dashboard.id === activeId && 'dashboards__item--active') }
                onClick={ () => { !editMode && changeDashboard(dashboard.id); } }
                onKeyDown={ (event) => { this.handleKeyDown(event, dashboard.id); } }
                tabIndex={ useTabIndex && !editMode ? '0' : '-1' }
              >
                <label className="dashboards__label">{ dashboard.name }</label>
                <Icon
                  className="dashboards__icon"
                  icon="edit"
                  title={ intl.formatMessage({ id: 'dashboard.edit' }) }
                  stopPropagation
                  onClick={ () => this.onIconClick('EditDashboard', dashboard) }
                  tabIndex={ useTabIndex && editMode ? '0' : '-1' }
                />
                <Icon
                  className="dashboards__icon dashboards__icon--delete"
                  icon="delete"
                  title={ intl.formatMessage({ id: 'dashboard.delete' }) }
                  stopPropagation
                  onClick={ () => this.onIconClick('DeleteDashboard', dashboard) }
                  tabIndex={ useTabIndex && editMode ? '0' : '-1' }
                />
              </li>
            )) }
            { dashboards.length === 0 && (
              <li className="dashboard__empty">
                <i><FormattedMessage id="dashboard.empty" /></i>
              </li>
            ) }
          </ul>
        </div>
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
  toggleDashboardOpen: PropTypes.func.isRequired,
  useTabIndex: PropTypes.bool,
  isSidebar: PropTypes.bool
};

Dashboards.defaultProps = {
  dashboards: [],
  useTabIndex: true
};
