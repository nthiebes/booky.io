import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Page from '../../templates/page';
import Categories from '../../organisms/categories';
import Section from '../../molecules/section';

import './Shared.scss';

class Shared extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    dashboards: PropTypes.array,
    getDashboard: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { getDashboard, match } = this.props;
    const { id } = match.params;

    getDashboard(id);
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

export default withRouter(Shared);
