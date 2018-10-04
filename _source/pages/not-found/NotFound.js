import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

import Page from '../../templates/page';
import Section from '../../molecules/section';
import Empty from '../../molecules/empty';
import Link from '../../atoms/link';

class NotFound extends Component {
  render() {
    const { intl } = this.props;

    return (
      <Page>
        <Section>
          <Empty imageAlt={ intl.formatMessage({ id: 'category.emptyImage' }) } imageUrl="_assets/not-found.svg">
            <FormattedMessage
              id="notFound.figureText"
              values={ {
                mail: <Link href="mailto:hello@booky.io"><FormattedMessage id="error.email" /></Link>,
                home: <Link to="/"><FormattedMessage id="misc.startpage" /></Link>
              } } />
          </Empty>
        </Section>
      </Page>
    );
  }
}

NotFound.propTypes = {
  intl: PropTypes.object.isRequired
};

export default injectIntl(NotFound);
