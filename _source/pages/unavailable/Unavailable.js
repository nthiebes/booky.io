import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import Page from '../../templates/page';
import Section from '../../molecules/section';
import Empty from '../../molecules/empty';
import { ButtonLargeBlue } from '../../atoms/button';
import Link from '../../atoms/link';

export default class Unavailable extends Component {
  handleReloadClick = () => {
    window.location.reload();
  };

  render() {
    return (
      <Page>
        <Section>
          <Empty illustration="404">
            <FormattedMessage
              id="error.unavailable"
              values={{
                mail: (
                  <Link to="/contact">
                    <FormattedMessage id="error.email" />
                  </Link>
                ),
                home: (
                  <Link to="/">
                    <FormattedMessage id="misc.startpage" />
                  </Link>
                )
              }}
            />
          </Empty>
          <ButtonLargeBlue
            className="unavailable__button"
            onClick={this.handleReloadClick}
            icon="refresh"
          >
            <FormattedMessage id="error.reload" />
          </ButtonLargeBlue>
        </Section>
      </Page>
    );
  }
}
