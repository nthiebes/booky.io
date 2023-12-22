import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { injectIntl } from 'react-intl';

import Page from '../../templates/page';
import Categories from '../../organisms/categories';
import Section from '../../molecules/section';

import './Shared.scss';

class Shared extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    dashboards: PropTypes.array,
    getDashboard: PropTypes.func.isRequired,
    loggedIn: PropTypes.bool.isRequired,
    intl: PropTypes.object.isRequired
  };

  componentDidMount() {
    const { getDashboard, match } = this.props;
    const { id } = match.params;

    getDashboard(id);
  }

  componentDidUpdate(oldProps) {
    if (this.props.dashboards.length > 0 && oldProps.dashboards.length === 0) {
      document.title = `booky | ${this.props.dashboards[0].name}`;
    }
  }

  componentWillUnmount() {
    const { loggedIn, intl } = this.props;

    if (loggedIn) {
      document.title = 'booky';
    } else {
      document.title = intl.formatMessage({
        id: 'misc.pageTitle'
      });
    }
  }

  render() {
    const { dashboards } = this.props;

    return (
      <Page>
        <Section>
          <Categories
            className="share__categories"
            viewOnly
            sharedDashboardName={
              dashboards.length > 0 ? dashboards[0].name : ''
            }
          />
        </Section>
      </Page>
    );
  }
}

export default injectIntl(withRouter(Shared));
