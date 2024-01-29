/* eslint-disable max-len */
/* eslint-disable react/jsx-no-literals */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Page from '../../templates/page';
import Section from '../../molecules/section';
import { H1, H2, H3 } from '../../atoms/headline';
import P from '../../atoms/paragraph';
import Link from '../../atoms/link';
import Illustration from '../../atoms/illustration';

export default class Legal extends Component {
  render() {
    const { locale } = this.props;

    return (
      <Page>
        <Section>
          <Illustration
            name="legal"
            className="legal__illustration booky--hide-mobile"
          />
          {locale === 'en' && (
            <Fragment>
              <H1>Legal Notice</H1>

              <H2>Information pursuant to § 5 TMG</H2>
              <P>
                {'Nico Thiebes'}
                <br />
                {'Wilseder Ring 43'}
                <br />
                {'21079 Hamburg, Germany'}
              </P>

              <H2>Contact</H2>
              <P>
                Email:{' '}
                <Link href="mailto:hello@booky.io">{'hello@booky.io'}</Link>
                {/* <Link to="/contact">
                  Contact form
                </Link> */}
              </P>

              <H3>Liability for Contents</H3>
              <P>
                As service providers, we are liable for own contents of these
                websites according to Paragraph 7, Sect. 1 German Telemedia Act
                (TMG). However, according to Paragraphs 8 to 10 German Telemedia
                Act (TMG), service providers are not obligated to permanently
                monitor submitted or stored information or to search for
                evidences that indicate illegal activities.
              </P>
              <P>
                Legal obligations to removing information or to blocking the use
                of information remain unchallenged. In this case, liability is
                only possible at the time of knowledge about a specific
                violation of law. Illegal contents will be removed immediately
                at the time we get knowledge of them.
              </P>

              <H3>Liability for Links</H3>
              <P>
                Our offer includes links to external third party websites. We
                have no influence on the contents of those websites, therefore
                we cannot guarantee for those contents. Providers or
                administrators of linked websites are always responsible for
                their own contents.
              </P>
              <P>
                The linked websites had been checked for possible violations of
                law at the time of the establishment of the link. Illegal
                contents were not detected at the time of the linking. A
                permanent monitoring of the contents of linked websites cannot
                be imposed without reasonable indications that there has been a
                violation of law. Illegal links will be removed immediately at
                the time we get knowledge of them.
              </P>

              <H3>Copyright</H3>
              <P>
                Contents and compilations published on these websites by the
                providers are subject to German copyright laws. Reproduction,
                editing, distribution as well as the use of any kind outside the
                scope of the copyright law require a written permission of the
                author or originator. Downloads and copies of these websites are
                permitted for private use only.
                <br /> The commercial use of our contents without permission of
                the originator is prohibited.
              </P>
              <P>
                Copyright laws of third parties are respected as long as the
                contents on these websites do not originate from the provider.
                Contributions of third parties on this site are indicated as
                such. However, if you notice any violations of copyright law,
                please inform us. Such contents will be removed immediately.
              </P>
            </Fragment>
          )}
          {locale === 'de' && (
            <Fragment>
              <H1>Impressum</H1>

              <H2>Angaben gemäß § 5 TMG</H2>
              <P>
                {'Nico Thiebes'}
                <br />
                {'Wilseder Ring 43'}
                <br />
                {'21079 Hamburg, Deutschland'}
              </P>

              <H2>Kontakt</H2>
              <P>
                E-Mail:{' '}
                <Link href="mailto:hello@booky.io">{'hello@booky.io'}</Link>
                {/* <Link to="/contact">
                  Kontaktformular
                </Link> */}
              </P>

              <H3>Haftung für Inhalte</H3>
              <P>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen.
              </P>
              <P>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                Informationen nach den allgemeinen Gesetzen bleiben hiervon
                unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
                Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
                Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden
                wir diese Inhalte umgehend entfernen.
              </P>

              <H3>Haftung für Links</H3>
              <P>
                Unser Angebot enthält Links zu externen Websites Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
                diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
                wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
                überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                Verlinkung nicht erkennbar.
              </P>
              <P>
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
                jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
                zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
                derartige Links umgehend entfernen.
              </P>

              <H3>Urheberrecht</H3>
              <P>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                Downloads und Kopien dieser Seite sind nur für den privaten,
                nicht kommerziellen Gebrauch gestattet.
              </P>
              <P>
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
                wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
                werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
                trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
                bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden
                von Rechtsverletzungen werden wir derartige Inhalte umgehend
                entfernen.
              </P>
            </Fragment>
          )}
        </Section>
      </Page>
    );
  }
}

Legal.propTypes = {
  locale: PropTypes.string.isRequired
};
