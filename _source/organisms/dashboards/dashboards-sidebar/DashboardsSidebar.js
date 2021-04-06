import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { injectIntl } from 'react-intl';

import Icon from '../../../atoms/icon';
import { DashboardsList } from '../index';

class DashboardsSidebar extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    intl: PropTypes.object.isRequired,
    pinned: PropTypes.bool,
    updateSettings: PropTypes.func.isRequired,
    headerSticky: PropTypes.bool.isRequired,
    toolbarSticky: PropTypes.bool.isRequired,
    currentlySticky: PropTypes.bool.isRequired,
    darkMode: PropTypes.bool.isRequired
  };

  togglePinned = () => {
    const { pinned, updateSettings } = this.props;

    updateSettings({
      pinned: !pinned
    });
  };

  getStickyClass = () => {
    const { toolbarSticky, headerSticky, currentlySticky } = this.props;

    if (toolbarSticky && headerSticky) {
      return 'dashboards-sidebar--sticky';
    }

    if (!toolbarSticky && headerSticky) {
      return 'dashboards-sidebar--sticky-header';
    }

    if (toolbarSticky && !headerSticky && currentlySticky) {
      return 'dashboards-sidebar--sticky-one-and-only';
    }

    return '';
  };

  render() {
    const { className, intl, pinned, darkMode } = this.props;

    return (
      <aside
        className={classNames(
          'dashboards-sidebar',
          'booky--hide-mobile-tablet',
          !pinned && 'dashboards-sidebar--hide',
          this.getStickyClass(),
          darkMode && 'dashboards-sidebar--dark-mode',
          className
        )}
      >
        <DashboardsList droppableIdSuffix="sidebar" />
        <Icon
          onClick={this.togglePinned}
          className="dashboards-sidebar__toggle"
          icon={pinned ? 'back' : 'forward'}
          label={
            pinned
              ? intl.formatMessage({ id: 'dashboard.reduce' })
              : intl.formatMessage({ id: 'dashboard.expand' })
          }
          tooltipDirection={pinned ? 'bottom' : 'right'}
          isButton
        />
      </aside>
    );
  }
}

export default injectIntl(DashboardsSidebar);
