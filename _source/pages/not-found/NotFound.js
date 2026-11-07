import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';

import Page from '../../templates/page';
import Section from '../../molecules/section';
import Empty from '../../molecules/empty';
import Link from '../../atoms/link';

class NotFound extends Component {
  render() {
    return (
      <Page>
        <Section>
          <Empty illustration="404">
            <FormattedMessage
              id="notFound.figureText"
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
        </Section>
      </Page>
    );
  }
}

export default injectIntl(NotFound);
