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
    activeDashboardId: PropTypes.number,
    isActiveDashboardPublic: PropTypes.bool,
    className: PropTypes.string,
    dashboardsStyle: PropTypes.string.isRequired,
    darkMode: PropTypes.bool.isRequired,
    categoriesPending: PropTypes.bool,
    openModal: PropTypes.func.isRequired,
    hasDashboards: PropTypes.bool,
    isPremium: PropTypes.bool,
    intl: PropTypes.object.isRequired
  };

  state = {
    dashboardModalOpen: false,
    copied: false
  };

  componentWillUnmount() {
    window.clearTimeout(this.timeout);
  }

  timeout;

  getStickyClass = () => {
    const { sticky, headerSticky, currentlySticky } = this.props;

    if (sticky && headerSticky) {
      return 'toolbar--sticky';
    }

    if (sticky && !headerSticky && currentlySticky) {
      return 'toolbar--sticky-one-and-only';
    }

    return '';
  };

  onAddCategoryClick = () => {
    this.props.openModal('AddCategory');
  };

  onAddDashboardClick = () => {
    this.props.openModal('AddDashboard');
  };

  onShareClick = () => {
    const {
      activeDashboardName,
      activeDashboardId,
      isActiveDashboardPublic,
      openModal
    } = this.props;

    openModal('ShareDashboard', {
      id: activeDashboardId,
      name: activeDashboardName,
      public: isActiveDashboardPublic
    });
  };

  copy = () => {
    navigator.clipboard.writeText(
      `${window.location.origin}/shared/${this.props.activeDashboardId}`
    );

    this.setState({
      copied: true
    });

    this.timeout = window.setTimeout(() => {
      this.setState({
        copied: false
      });
    }, 2000);
  };

  render() {
    const {
      activeDashboardName,
      className,
      dashboardsStyle,
      darkMode,
      categoriesPending,
      hasDashboards,
      intl,
      isPremium,
      isActiveDashboardPublic
    } = this.props;
    const { copied } = this.state;

    return (
      <section
        className={classNames(
          'toolbar',
          this.getStickyClass(),
          darkMode && 'toolbar--dark-mode',
          className
        )}
      >
        {dashboardsStyle === 'sidebar' && (
          <>
            {isActiveDashboardPublic && (
              <Icon
                icon="copy"
                label={intl.formatMessage(
                  {
                    id: copied ? 'misc.copied' : 'modal.shareLinkButton'
                  },
                  {
                    b: (msg) => msg
                  }
                )}
                onClick={this.copy}
                useSkeleton={!hasDashboards}
                isButton
              />
            )}
            <H1 style="h3" className="toolbar__headline" noMargin>
              {activeDashboardName || <Skeleton />}
            </H1>
          </>
        )}
        {dashboardsStyle === 'tabs' && (
          <>
            <DashboardsTabs />
            <Icon
              icon="add-collection"
              label={intl.formatMessage({ id: 'modal.addDashboard' })}
              onClick={this.onAddDashboardClick}
              useSkeleton={!hasDashboards}
              isButton
            />
          </>
        )}

        {isPremium && (
          <>
            <Icon
              icon="share"
              label={intl.formatMessage({ id: 'button.share' })}
              onClick={this.onShareClick}
              useSkeleton={!hasDashboards}
              isButton
              className="toolbar__share booky--hide-desktop"
            />
            <ButtonSmallPrimary
              icon="share"
              className={classNames(
                'toolbar__share booky--hide-mobile-tablet',
                dashboardsStyle === 'tabs' && 'toolbar__share--tabs'
              )}
              onClick={this.onShareClick}
              useSkeleton={categoriesPending}
            >
              <FormattedMessage
                id="button.share"
                values={{ b: (msg) => <b>{msg}</b> }}
              />
            </ButtonSmallPrimary>
          </>
        )}

        {dashboardsStyle === 'tabs' ? (
          <>
            <Icon
              icon="add-category"
              className="booky--hide-desktop"
              label={intl.formatMessage({ id: 'modal.addCategory' })}
              onClick={this.onAddCategoryClick}
              useSkeleton={categoriesPending}
              isButton
            />
            <ButtonSmallPrimary
              icon="add-category"
              className="toolbar__button booky--hide-mobile-tablet"
              onClick={this.onAddCategoryClick}
              useSkeleton={categoriesPending}
            >
              <FormattedMessage
                id="category.add"
                values={{ b: (msg) => <b>{msg}</b> }}
              />
            </ButtonSmallPrimary>
          </>
        ) : (
          <ButtonSmallPrimary
            icon="add-category"
            className="toolbar__add-category"
            onClick={this.onAddCategoryClick}
            useSkeleton={categoriesPending}
          >
            <FormattedMessage
              id="category.add"
              values={{ b: (msg) => <b>{msg}</b> }}
            />
          </ButtonSmallPrimary>
        )}

        <SearchField
          className="booky--hide-mobile-tablet"
          id="search-desktop"
        />
      </section>
    );
  }
}

export default injectIntl(Toolbar);
