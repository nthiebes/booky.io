import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

import Page from '../../templates/page';
import { H1, H2, H3 } from '../../atoms/headline';
import P from '../../atoms/paragraph';
import Link from '../../atoms/link';
import Section from '../../molecules/section';

export default class Legal extends Component {
  render() {
    const { locale } = this.props;

    return (
      <Page>
        <Section>
          <H1>
            <FormattedMessage id="legal.title" />
          </H1>
          <P first>
            <FormattedMessage id="legal.1" />
          </P>
          <P>
            <FormattedHTMLMessage id="legal.2" />
          </P>
          <H2>
            <FormattedMessage id="legal.3" />
          </H2>
          <P>
            <FormattedMessage id="legal.4" />
            <Link href="mailto:hello@booky.io">{ 'hello@booky.io' }</Link>
          </P>
          <H2>
            <FormattedMessage id="legal.5" />
          </H2>
          <H3>
            <FormattedMessage id="legal.6" />
          </H3>
          <P>
            <FormattedMessage id="legal.7" />
          </P>
          { locale === 'en' && (
            <Fragment>
              <P>
                <FormattedMessage id="legal.8" />
              </P>
            </Fragment>
          ) }
          <H3>
            <FormattedMessage id="legal.9" />
          </H3>
          <P>
            <FormattedMessage id="legal.10" />
          </P>
          { locale === 'de' && (
            <Fragment>
              <H3>
                <FormattedMessage id="legal.11" />
              </H3>
              <P>
                <FormattedMessage id="legal.12" />
              </P>
            </Fragment>
          ) }
          { locale === 'en' && (
            <P>
              <i><FormattedMessage id="legal.13" /></i>
              <Link href="http://www.twigg.de" target="_blank">{ 'http://www.twigg.de' }</Link>
            </P>
          ) }
          { locale === 'de' && (
            <P>
              <i><FormattedMessage id="legal.13" /></i>
              <Link href="https://www.e-recht24.de" target="_blank">{ 'https://www.e-recht24.de' }</Link>{ ', ' }
              <Link href="https://www.e-recht24.de/muster-disclaimer.html" target="_blank">{ 'Disclaimer eRecht24' }</Link>{ ', ' }
              <Link href="https://www.e-recht24.de/muster-disclaimer.html" target="_blank">{ 'eRecht24 Disclaimer' }</Link>
            </P>
          ) }
        </Section>
      </Page>
    );
  }
}

Legal.propTypes = {
  locale: PropTypes.string.isRequired
};
