import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import scrolling from '../../_utils/scrolling';
import Icon from '../../atoms/icon';
import { H3 } from '../../atoms/headline';
// import TabBar from '../../molecules/tab-bar';

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
    const { dashboard, router } = this.props;

    return (
      <div className={ `toolbar ${this.getStickyClass()}` }>
        <H3 className="toolbar__headline">{ dashboard.name }</H3>
        <Icon icon="tree" title="Edit site structure" onClick={ () => { router.push('/structure'); } } />
      </div>
    );
    
    /*
    <Icon
      icon="edit"
      title="Edit dashboard"
      onClick={ () => { openModal('EditDashboard', {
        id: dashboard.id,
        name: dashboard.name
      }); } }
    />
     */
    // <Icon icon="add-category" title="Add category" onClick={ () => { openModal('AddCategory'); } } />
    // <div className="toolbar__gradient" />
    // <TabBar tabs={ dashboards } />
  }
}

export default withRouter(Toolbar);

Toolbar.propTypes = {
  updateCurrentlySticky: PropTypes.func.isRequired,
  headerSticky: PropTypes.bool,
  sticky: PropTypes.bool,
  currentlySticky: PropTypes.bool,
  dashboards: PropTypes.object,
  dashboard: PropTypes.object,
  openModal: PropTypes.func.isRequired,
  router: PropTypes.object.isRequired
};

Toolbar.defaultProps = {
  'headerSticky': true,
  'sticky': true,
  'currentlySticky': true,
  dashboards: {}
};
