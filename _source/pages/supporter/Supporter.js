/* eslint-disable max-lines */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';

import Page from '../../templates/page';
import { H2, H3, Display } from '../../atoms/headline';
import P from '../../atoms/paragraph';
import Section from '../../molecules/section';
import Icon from '../../atoms/icon';
import { ButtonLargeBlue } from '../../atoms/button';
import Illustration from '../../atoms/illustration';

import './Supporter.scss';

class Supporter extends PureComponent {
  static propTypes = {
    intl: PropTypes.object.isRequired,
    premium: PropTypes.bool,
    stickyHeader: PropTypes.bool
  };

  render() {
    const { stickyHeader, premium } = this.props;

    return (
      <Page
        showStats
        className={classNames('supporter', stickyHeader && 'supporter--sticky')}
      >
        <Section
          color="dark"
          className="supporter__header"
          contentClassName="supporter__header-content"
          wave
        >
          <div>
            <Display noMargin color="light">
              <FormattedMessage id="Deine booky Support-Mitgliedschaft" />
            </Display>
            <P size="large" ignoreDarkMode color="light" noPadding>
              <FormattedMessage id="Mit der Support-Mitgliedschaft kannst du booky unterstützen und erhälst Zugriff auf exklusive Funktionen. Dabei bestimmst du, wie viel du zahlst und behälst immer die Kontrolle!" />
            </P>
            {/* <H2 style="h3" noMargin ignoreDarkMode color="light">
            </H2> */}
            <ButtonLargeBlue
              icon="heart"
              to="/upsell"
              contentBefore
              // className="home__join"
            >
              <FormattedMessage
                id="button.supporter"
                values={{ b: (msg) => <b>{msg}</b> }}
              />
            </ButtonLargeBlue>
          </div>
          <Illustration
            name="supporter"
            width="400"
            height="400"
            className="supporter__illustration"
          />
        </Section>

        <Section>
          <H2 style="h1" centered className="supporter__headline">
            <FormattedMessage id="Warum die Support-Mitgliedschaft?" />
          </H2>
          <div className="supporter__advantages">
            <div className="supporter__advantage">
              <Icon icon="heart" size="medium" color="primary" />
              <H3
                noMargin
                centered
                style="h4"
                className="supporter__advantage-headline"
              >
                {'Dein booky, nur mehr.'}
              </H3>
              <P noPadding>
                {'Natürlich alle Funktionen der regulären Mitgliedschaft.'}
              </P>
            </div>
            <div className="supporter__advantage">
              <Icon icon="share" size="medium" color="primary" />
              <H3
                noMargin
                centered
                style="h4"
                className="supporter__advantage-headline"
              >
                {'Teile deine Sammlungen.'}
              </H3>
              <P noPadding>
                {'Du kannst so viele Sammlungen teilen, wie du möchtest.'}
              </P>
            </div>
            <div className="supporter__advantage">
              <Icon icon="calendar" size="medium" color="primary" />
              <H3
                noMargin
                centered
                style="h4"
                className="supporter__advantage-headline"
              >
                {'Du hast die Kontrolle.'}
              </H3>
              <P noPadding>
                {'Wähle deinen monatlichen Beitrag, monatlich kündbar.'}
              </P>
            </div>
            <div className="supporter__advantage">
              <Icon icon="coffee" size="medium" color="primary" />
              <H3
                noMargin
                centered
                style="h4"
                className="supporter__advantage-headline"
              >
                {'Unterstütze booky.'}
              </H3>
              <P noPadding>
                {'Halte unsere Server und Kaffeemaschinen am Laufen.'}
              </P>
            </div>
            <div className="supporter__advantage">
              <Icon icon="lock" size="medium" color="primary" />
              <H3
                noMargin
                centered
                style="h4"
                className="supporter__advantage-headline"
              >
                {'Neue exklusive Inhalte.'}
              </H3>
              <P noPadding>
                {'Zugriff auf alle zukünftigen Support-Funktionen.'}
              </P>
            </div>
          </div>
        </Section>

        <Section color="blue" contentSpace noMargin>
          <H2 style="h1" centered noMargin>
            <FormattedMessage id="Warum die Support-Mitgliedschaft?" />
          </H2>
          <P size="large" first>
            {
              'Zugriff auf alle zukünftigen booky Funktionen. Zugriff auf alle zukünftigen booky Funktionen. Zugriff auf alle zukünftigen booky Funktionen. Zugriff auf alle zukünftigen booky Funktionen. Zugriff auf alle zukünftigen booky Funktionen. Zugriff auf alle zukünftigen booky Funktionen.'
            }
          </P>
          <P size="large" noPadding>
            {
              'Zugriff auf alle zukünftigen booky Funktionen. Zugriff auf alle zukünftigen booky Funktionen. Zugriff auf alle zukünftigen booky Funktionen. Zugriff auf alle zukünftigen booky Funktionen.'
            }
          </P>
        </Section>

        <Section contentSpace>
          <H2 style="h1" centered noMargin>
            <FormattedMessage id="FAQ's zur Support-Mitgliedschaft." />
          </H2>
          <div className="faq">
            <div className="faq__item">
              <H3>{'Kann ich meine Zahlungen ändern oder einstellen?'}</H3>
              <P noPadding>
                {
                  'Natürlich alle Funktionen der Member-Mitgliedschaft. Natürlich alle Funktionen der Member-Mitgliedschaft. Natürlich alle Funktionen der Member-Mitgliedschaft.'
                }
              </P>
            </div>
            <div className="faq__item">
              <H3>{'Kann ich meine Zahlungen ändern oder einstellen?'}</H3>
              <P noPadding>
                {
                  'Natürlich alle Funktionen der Member-Mitgliedschaft. Natürlich alle Funktionen der Member-Mitgliedschaft. Natürlich alle Funktionen der Member-Mitgliedschaft.'
                }
              </P>
            </div>
            <div className="faq__item">
              <H3>{'Kann ich meine Zahlungen ändern oder einstellen?'}</H3>
              <P noPadding>
                {
                  'Natürlich alle Funktionen der Member-Mitgliedschaft. Natürlich alle Funktionen der Member-Mitgliedschaft. Natürlich alle Funktionen der Member-Mitgliedschaft.'
                }
              </P>
            </div>
            <div className="faq__item">
              <H3>{'Kann ich meine Zahlungen ändern oder einstellen?'}</H3>
              <P noPadding>
                {
                  'Natürlich alle Funktionen der Member-Mitgliedschaft. Natürlich alle Funktionen der Member-Mitgliedschaft. Natürlich alle Funktionen der Member-Mitgliedschaft.'
                }
              </P>
            </div>
            <div className="faq__item">
              <H3>{'Kann ich meine Zahlungen ändern oder einstellen?'}</H3>
              <P noPadding>
                {
                  'Natürlich alle Funktionen der Member-Mitgliedschaft. Natürlich alle Funktionen der Member-Mitgliedschaft. Natürlich alle Funktionen der Member-Mitgliedschaft.'
                }
              </P>
            </div>
            <div className="faq__item">
              <H3>{'Kann ich meine Zahlungen ändern oder einstellen?'}</H3>
              <P noPadding>
                {
                  'Natürlich alle Funktionen der Member-Mitgliedschaft. Natürlich alle Funktionen der Member-Mitgliedschaft. Natürlich alle Funktionen der Member-Mitgliedschaft.'
                }
              </P>
            </div>
          </div>
        </Section>
      </Page>
    );
  }
}

export default Supporter;
