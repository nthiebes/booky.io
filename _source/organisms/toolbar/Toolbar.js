import React, { Component } from 'react';
import PropTypes from 'prop-types';
import scrolling from '../../_utils/scrolling';
// import Button from '../../atoms/button';
import Icon from '../../atoms/icon';
import TabBar from '../../molecules/tab-bar';
// import Dashboards from '../../organisms/dashboards';

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

  getStickyClass(PROPS) {
    if (PROPS.sticky && PROPS.headerSticky) {
      return 'o-toolbar--sticky';
    }

    if (PROPS.sticky && !PROPS.headerSticky && PROPS.currentlySticky) {
      return 'o-toolbar--sticky-one-and-only';
    }

    return '';
  }

  render() {
    const { dashboards } = this.props;
    // const STICKY_CLASS = this.getStickyClass(PROPS);
    // const OPEN_CLASS = PROPS.searchOpen ? 'o-toolbar--open' : '';
    // const TOOLBAR_CLASS = `o-toolbar ${STICKY_CLASS} ${OPEN_CLASS}`;

    return (
      <div className="toolbar">
        <TabBar tabs={ dashboards } />
        <div className="toolbar__gradient" />
        <Icon icon="add" color="dark" />
        <Icon icon="dashboard" color="dark" />
      </div>
    );
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
  dashboards: PropTypes.object
};

Toolbar.defaultProps = {
  'headerSticky': true,
  'sticky': true,
  'currentlySticky': true,
  dashboards: {}
};
