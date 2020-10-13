import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage, injectIntl } from 'react-intl';

import Icon from '../../atoms/icon';
import { H1 } from '../../atoms/headline';
import Skeleton from '../../atoms/skeleton';
import SearchField from '../../molecules/search-field';
import { ButtonSmallPrimary } from '../../atoms/button';
import { DashboardsTabs } from '../dashboards';

class Toolbar extends PureComponent {
  static propTypes = {
    headerSticky: PropTypes.bool.isRequired,
    sticky: PropTypes.bool.isRequired,
    currentlySticky: PropTypes.bool.isRequired,
    activeDashboardName: PropTypes.string,
    className: PropTypes.string,
    dashboardsStyle: PropTypes.string.isRequired,
    darkMode: PropTypes.bool.isRequired,
    categoriesPending: PropTypes.bool,
    hasCategories: PropTypes.bool,
    openModal: PropTypes.func.isRequired,
    hasDashboards: PropTypes.bool,
    intl: PropTypes.object.isRequired
  }

  state = {
    dashboardModalOpen: false
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

  onAddCategoryClick = () => {
    this.props.openModal('AddCategory');
  }

  onAddDashboardClick = () => {
    this.props.openModal('AddDashboard');
  }

  render() {
    const {
      activeDashboardName,
      className,
      dashboardsStyle,
      darkMode,
      categoriesPending,
      hasCategories,
      hasDashboards,
      intl
    } = this.props;

    return (
      <section className={ classNames('toolbar', this.getStickyClass(), darkMode && 'toolbar--dark-mode', className) }>
        { dashboardsStyle === 'sidebar' && (
          <H1 style="h3" className="toolbar__headline" noMargin>
            { activeDashboardName || <Skeleton /> }
          </H1>
        ) }
        { dashboardsStyle === 'tabs' && (
          <>
            <DashboardsTabs />
            <Icon
              icon="add-collection"
              label={ intl.formatMessage({ id: 'modal.addDashboard' }) }
              onClick={ this.onAddDashboardClick }
              useSkeleton={ !hasDashboards }
              isButton
            />
          </>
        ) }
        { hasCategories && (
          <>
            { dashboardsStyle === 'tabs' ? (
              <>
                <Icon
                  icon="add-category"
                  className="booky--hide-desktop"
                  label={ intl.formatMessage({ id: 'modal.addCategory' }) }
                  onClick={ this.onAddCategoryClick }
                  useSkeleton={ categoriesPending }
                  isButton
                />
                <ButtonSmallPrimary
                  icon="add-category"
                  className="toolbar__button booky--hide-mobile-tablet"
                  onClick={ this.onAddCategoryClick }
                  useSkeleton={ categoriesPending }
                >
                  <FormattedMessage id="category.add" values={ { b: (msg) => <b>{msg}</b> } } />
                </ButtonSmallPrimary>
              </>
            ) : (
              <ButtonSmallPrimary
                icon="add-category"
                className="toolbar__add-category"
                onClick={ this.onAddCategoryClick }
                useSkeleton={ categoriesPending }
              >
                <FormattedMessage id="category.add" values={ { b: (msg) => <b>{msg}</b> } } />
              </ButtonSmallPrimary>
            ) }
          </>
        ) }
        <SearchField className="booky--hide-mobile-tablet" id="search-desktop" />
      </section>
    );
  }
}

export default injectIntl(Toolbar);
