import React, { Component } from 'react';
import PropTypes from 'prop-types';
import scrolling from '../../_utils/scrolling';
// import Button from '../../atoms/button';
import Icon from '../../atoms/icon';
import { H3 } from '../../atoms/headline';
// import TabBar from '../../molecules/tab-bar';

export default class Toolbar extends Component {
  constructor(props) {
    super(props);

    this.nextProps = {};
    this.isAboveActions = this.isAboveActions.bind(this);
    this.isBelowActions = this.isBelowActions.bind(this);
  }

  componentDidMount() {
    scrolling.registerAction('toolbar', {
      'offset': 85,
      'scope': this,
      'isAbove': function() {
        this.isAboveActions();
      },
      'isBelow': function() {
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
    const { dashboard, toggleStructureView } = this.props;

    return (
      <div className={ `toolbar ${this.getStickyClass()}` }>
        <Icon icon="settings" title="Configure dashboard" />
        <H3 className="toolbar__headline">{ dashboard.name }</H3>
        <Icon icon="tree" title="Edit site structure" onClick={ toggleStructureView } />
      </div>
    );
    // <div className="toolbar__gradient" />
    // <TabBar tabs={ dashboards } />
  }
}

Toolbar.propTypes = {
  'searchOpen': PropTypes.bool.isRequired,
  'searchFocused': PropTypes.bool,
  'editMode': PropTypes.bool.isRequired,
  'onSearchClick': PropTypes.func.isRequired,
  'onEditModeClick': PropTypes.func.isRequired,
  'updateCurrentlySticky': PropTypes.func.isRequired,
  'headerSticky': PropTypes.bool,
  'sticky': PropTypes.bool,
  'currentlySticky': PropTypes.bool,
  dashboards: PropTypes.object,
  dashboard: PropTypes.object,
  toggleStructureView: PropTypes.func.isRequired
};

Toolbar.defaultProps = {
  'headerSticky': true,
  'sticky': true,
  'currentlySticky': true,
  dashboards: {}
};
