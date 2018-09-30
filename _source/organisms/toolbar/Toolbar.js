import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { injectIntl } from 'react-intl';
import classNames from 'classnames';

import scrolling from '../../_utils/scrolling';
import Icon from '../../atoms/icon';
import { H3 } from '../../atoms/headline';
import Search from '../../molecules/search';
import { TabBar, Tab } from '../../molecules/tab-bar';

class Toolbar extends Component {
  constructor(props) {
    super(props);

    this.nextProps = {};
    this.isAboveActions = this.isAboveActions.bind(this);
    this.isBelowActions = this.isBelowActions.bind(this);
    this.state = {
      dashboardModalOpen: false
    };
  }

  componentDidMount() {
    scrolling.registerAction('toolbar', {
      offset: 85,
      scope: this,
      isAbove: function() {
        this.isAboveActions();
      },
      isBelow: function() {
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

  isAboveActions() {
    if (this.nextProps.sticky && !this.nextProps.headerSticky) {
      this.props.updateCurrentlySticky(false);
    }
  }

  isBelowActions() {
    if (this.nextProps.sticky && !this.nextProps.headerSticky) {
      this.props.updateCurrentlySticky(true);
    }
  }

  getStickyClass() {
    const { sticky, headerSticky, currentlySticky } = this.props;

    if (sticky && headerSticky) {
      return 'toolbar--sticky';
    }

    if (sticky && !headerSticky && currentlySticky) {
      return 'toolbar--sticky-one-and-only';
    }

    return '';
  }

  render() {
    const { dashboard, router, intl, className, dashboardsPosition, dashboards, changeDashboard } = this.props;

    return (
      <section className={ classNames('toolbar', this.getStickyClass(), className && className) }>
        <Icon
          icon="tree"
          title={ intl.formatMessage({ id: 'structure.title' }) }
          onClick={ () => { router.push('/structure'); } }
          tabIndex="0"
        />
        { dashboardsPosition === 'sidebar' && (
          <H3 className="toolbar__headline">{ dashboard.name || '' }</H3>
        ) }
        { dashboardsPosition === 'tabs' && (
          <TabBar className="toolbar__tabs">
            { dashboards.items.map((tab, index) => (
              <Tab
                key={ index }
                tabId={ index }
                active={ tab.id === dashboards.active }
                name={ tab.name }
                onClick={ () => { changeDashboard(tab.id); } }
              />
            )) }
          </TabBar>
        ) }
        <Search className="booky--hide-mobile-tablet" />
      </section>
    );
  }
}

export default withRouter(injectIntl(Toolbar));

Toolbar.propTypes = {
  updateCurrentlySticky: PropTypes.func.isRequired,
  headerSticky: PropTypes.bool,
  sticky: PropTypes.bool,
  currentlySticky: PropTypes.bool,
  dashboards: PropTypes.object.isRequired,
  dashboard: PropTypes.object,
  openModal: PropTypes.func.isRequired,
  router: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired,
  className: PropTypes.string,
  dashboardsPosition: PropTypes.string.isRequired,
  changeDashboard: PropTypes.func.isRequired
};

Toolbar.defaultProps = {
  headerSticky: true,
  sticky: true,
  currentlySticky: true,
  dashboard: {}
};
