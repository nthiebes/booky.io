import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedHTMLMessage } from 'react-intl';

import { scrolling } from '../../_utils/scrolling';
import Icon from '../../atoms/icon';
import { H1 } from '../../atoms/headline';
import Skeleton from '../../atoms/skeleton';
import SearchField from '../../molecules/search-field';
import { TabBar, Tab } from '../../molecules/tab-bar';
import { ButtonSmallPrimary } from '../../atoms/button';

class Toolbar extends PureComponent {
  static propTypes = {
    updateCurrentlySticky: PropTypes.func.isRequired,
    headerSticky: PropTypes.bool.isRequired,
    sticky: PropTypes.bool.isRequired,
    currentlySticky: PropTypes.bool.isRequired,
    dashboards: PropTypes.object.isRequired,
    activeDashboardName: PropTypes.string,
    className: PropTypes.string,
    dashboardsStyle: PropTypes.string.isRequired,
    changeDashboard: PropTypes.func.isRequired,
    darkMode: PropTypes.bool.isRequired,
    categoriesPending: PropTypes.bool,
    hasCategories: PropTypes.bool,
    openModal: PropTypes.func.isRequired
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

  componentDidUpdate(prevProps) {
    this.nextProps = prevProps;
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

  onAddClick = () => {
    this.props.openModal('AddCategory');
  }

  render() {
    const {
      activeDashboardName,
      className,
      dashboardsStyle,
      dashboards,
      changeDashboard,
      darkMode,
      categoriesPending,
      hasCategories
    } = this.props;

    return (
      <section className={ classNames('toolbar', this.getStickyClass(), darkMode && 'toolbar--dark-mode', className) }>
        { dashboardsStyle === 'sidebar' && (
          <Fragment>
            <Icon icon="collection" color={ darkMode ? 'grey' : 'medium' } />
            <H1 style="h3" className="toolbar__headline" noMargin>
              { activeDashboardName || <Skeleton /> }
            </H1>
          </Fragment>
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
        { hasCategories && (
          <ButtonSmallPrimary
            icon="add"
            className="toolbar__add-category"
            onClick={ this.onAddClick }
            useSkeleton={ categoriesPending }
          >
            <FormattedHTMLMessage id="category.add" />
          </ButtonSmallPrimary>
        ) }
        <SearchField className="booky--hide-mobile-tablet" id="search-desktop" />
      </section>
    );
  }
}

export default Toolbar;
