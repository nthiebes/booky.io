import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import classNames from 'classnames';

import { scrolling } from '../../_utils/scrolling';
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
    this.getStickyClass = this.getStickyClass.bind(this);
    this.onIconClick = this.onIconClick.bind(this);
    this.state = {
      dashboardModalOpen: false
    };
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

  onIconClick() {
    this.props.openModal('EditStructure');
  }

  render() {
    const {
      dashboard,
      intl,
      className,
      dashboardsStyle,
      dashboards,
      changeDashboard,
      darkMode
    } = this.props;

    return (
      <section className={ classNames('toolbar', this.getStickyClass(), darkMode && 'toolbar--dark-mode', className && className) }>
        <Icon
          icon="tree"
          title={ intl.formatMessage({ id: 'structure.title' }) }
          onClick={ this.onIconClick }
          tabIndex="0"
        />
        { dashboardsStyle === 'sidebar' && (
          <H3 className="toolbar__headline">{ dashboard.name || '' }</H3>
        ) }
        { dashboardsStyle === 'tabs' && (
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

export default injectIntl(Toolbar);

Toolbar.propTypes = {
  updateCurrentlySticky: PropTypes.func.isRequired,
  headerSticky: PropTypes.bool.isRequired,
  sticky: PropTypes.bool.isRequired,
  currentlySticky: PropTypes.bool.isRequired,
  dashboards: PropTypes.object.isRequired,
  dashboard: PropTypes.object,
  openModal: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
  className: PropTypes.string,
  dashboardsStyle: PropTypes.string.isRequired,
  changeDashboard: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired
};

Toolbar.defaultProps = {
  dashboard: {}
};
