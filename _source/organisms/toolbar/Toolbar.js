import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import classNames from 'classnames';

import { scrolling } from '../../_utils/scrolling';
import Icon from '../../atoms/icon';
import { H3 } from '../../atoms/headline';
import Skeleton from '../../atoms/skeleton';
import Search from '../../molecules/search';
import { TabBar, Tab } from '../../molecules/tab-bar';

class Toolbar extends PureComponent {
  static propTypes = {
    updateCurrentlySticky: PropTypes.func.isRequired,
    headerSticky: PropTypes.bool.isRequired,
    sticky: PropTypes.bool.isRequired,
    currentlySticky: PropTypes.bool.isRequired,
    dashboards: PropTypes.object.isRequired,
    activeDashboardName: PropTypes.string,
    openModal: PropTypes.func.isRequired,
    intl: PropTypes.object.isRequired,
    className: PropTypes.string,
    dashboardsStyle: PropTypes.string.isRequired,
    changeDashboard: PropTypes.func.isRequired,
    darkMode: PropTypes.bool.isRequired
  }

  state = {
    dashboardModalOpen: false
  }

  componentDidMount() {
    scrolling.registerAction('toolbar', {
      offset: 90,
      scope: this,
      isAbove: () => {
        this.isAboveActions();
      },
      isBelow: () => {
        this.isBelowActions();
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    this.nextProps = nextProps;
    scrolling.updateStatus('toolbar');
  }

  componentWillUnmount() {
    scrolling.removeAction('toolbar');
  }

  nextProps = {};

  isAboveActions = () => {
    if (this.nextProps.sticky && !this.nextProps.headerSticky) {
      this.props.updateCurrentlySticky(false);
    }
  }

  isBelowActions = () => {
    if (this.nextProps.sticky && !this.nextProps.headerSticky) {
      this.props.updateCurrentlySticky(true);
    }
  }

  getStickyClass = () => {
    const { sticky, headerSticky, currentlySticky } = this.props;

    if (sticky && headerSticky) {
      return 'toolbar--sticky';
    }

    if (sticky && !headerSticky && currentlySticky) {
      return 'toolbar--sticky-one-and-only';
    }

    return '';
  }

  onIconClick = () => {
    this.props.openModal('EditStructure');
  }

  render() {
    const {
      activeDashboardName,
      intl,
      className,
      dashboardsStyle,
      dashboards,
      changeDashboard,
      darkMode
    } = this.props;

    return (
      <section className={ classNames('toolbar', this.getStickyClass(), darkMode && 'toolbar--dark-mode', className) }>
        <Icon
          icon="tree"
          label={ intl.formatMessage({ id: 'structure.title' }) }
          className="toolbar__icon"
        />
        {/** onClick={ this.onIconClick }
          isButton */}
        { dashboardsStyle === 'sidebar' && (
          <H3 className="toolbar__headline">
            { activeDashboardName || <Skeleton /> }
          </H3>
        ) }
        { dashboardsStyle === 'tabs' && (
          <TabBar className="toolbar__tabs">
            { dashboards.items.map((tab) => (
              <Tab
                key={ tab.id }
                tabId={ tab.id }
                active={ tab.id === dashboards.active }
                name={ tab.name }
                onClick={ changeDashboard }
              />
            )) }
          </TabBar>
        ) }
        <Search className="booky--hide-mobile-tablet" />
      </section>
    );
  }
}

export default injectIntl(Toolbar);
