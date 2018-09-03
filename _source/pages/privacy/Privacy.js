import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Page from '../../templates/page';
import { H1, H2 } from '../../atoms/headline';
import Link from '../../atoms/link';
import P from '../../atoms/paragraph';
import Section from '../../molecules/section';

export default class Privacy extends Component {
  render() {
    const { locale } = this.props;

    return (
      <Page>
        <Section>
          <H1>
            <FormattedMessage id="privacy.title" />
          </H1>
          { locale === 'en' && (
            <Fragment>
              <H2>
                <FormattedMessage id="privacy.1" />
              </H2>
              <P>
                <FormattedMessage id="privacy.2" />
              </P>
              <P>
                <FormattedMessage id="privacy.3" />
              </P>
              <H2>
                <FormattedMessage id="privacy.4" />
              </H2>
              <P>
                <FormattedMessage id="privacy.5" />
              </P>
              <P>
                <FormattedMessage id="privacy.6" />
              </P>
              <P>
                <i><FormattedMessage id="privacy.7" /></i>
              </P>
              <H2>
                <FormattedMessage id="privacy.8" />
              </H2>
              <P>
                <FormattedMessage id="privacy.9" />
              </P>
              <H2>
                <FormattedMessage id="privacy.10" />
              </H2>
              <P>
                <FormattedMessage id="privacy.11" />
              </P>
              <P>
                <i><FormattedMessage id="privacy.12" /></i>
              </P>
              <P>
                <FormattedMessage id="privacy.13" />
              </P>
              <H2>
                <FormattedMessage id="privacy.14" />
              </H2>
              <P>
                <FormattedMessage id="privacy.15" />
              </P>
              <H2>
                <FormattedMessage id="privacy.16" />
              </H2>
              <P>
                <FormattedMessage id="privacy.17" />
              </P>
              <H2>
                <FormattedMessage id="privacy.18" />
              </H2>
              <P>
                <FormattedMessage id="privacy.19" />
              </P>
              <P>
                <FormattedMessage id="privacy.20" />
              </P>
              <H2>
                <FormattedMessage id="privacy.21" />
              </H2>
              <P>
                <FormattedMessage id="privacy.22" />
                <Link target="_blank" href="https://tools.google.com/dlpage/gaoptout?hl=en">{ 'https://tools.google.com/dlpage/gaoptout?hl=en' }</Link>
                { '.' }
              </P>
              <P>
                <FormattedMessage id="privacy.23" />
              </P>
              <H2>
                <FormattedMessage id="privacy.24" />
              </H2>
              <P>
                <FormattedMessage id="privacy.25" />
              </P>
              <H2>
                <FormattedMessage id="privacy.26" />
              </H2>
              <P>
                <FormattedMessage id="privacy.27" />
              </P>
              <H2>
                <FormattedMessage id="privacy.28" />
              </H2>
              <P>
                <FormattedMessage id="privacy.29" />
              </P>
              <P>
                <FormattedMessage id="privacy.30" />
              </P>
              <H2>
                <FormattedMessage id="privacy.31" />
              </H2>
              <P>
                <FormattedMessage id="privacy.32" />
              </P>
              <P>
                <FormattedMessage id="privacy.33" />
                <Link href="mailto:hello@booky.io">{ 'hello@booky.io' }</Link>
              </P>
              <P>
                <FormattedMessage id="privacy.34" />
                <Link target="_blank" href="https://www.rhinosupport.com/">{ 'help desk software' }</Link>
                { '.' }
              </P>
            </Fragment>
          ) }
          { locale === 'de' && (
            <Fragment>
              <H2>
                <FormattedMessage id="privacy.1" />
              </H2>
              <P>
                <FormattedMessage id="privacy.2" />
              </P>
              <P>
                <FormattedMessage id="privacy.3" />
              </P>
              <P>
                <FormattedMessage id="privacy.4" />
              </P>
              <H2>
                <FormattedMessage id="privacy.5" />
              </H2>
              <P>
                <FormattedMessage id="privacy.6" />
              </P>
              <P>
                <FormattedMessage id="privacy.7" />
              </P>
              <P>
                <FormattedMessage id="privacy.8" />
              </P>
              <P>
                <i><FormattedMessage id="privacy.9" /></i>
                <Link href="https://www.e-recht24.de/muster-datenschutzerklaerung.html" target="_blank">{ 'Datenschutzerklärung eRecht24' }</Link>{ ', ' }
                <Link href="https://www.google.com/intl/de/analytics/privacyoverview.html" target="_blank">{ 'Google Analytics Bedingungen' }</Link>
              </P>
            </Fragment>
          ) }
        </Section>
      </Page>
    );
  }
}

Privacy.propTypes = {
  locale: PropTypes.string.isRequired
};
