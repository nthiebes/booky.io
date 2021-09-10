/* eslint-disable max-lines */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import classNames from 'classnames';

import Page from '../../templates/page';
import { H1, H2, H3 } from '../../atoms/headline';
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
    const { stickyHeader, premium, intl } = this.props;

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
            <H1 noMargin color="light" className="supporter__display">
              <FormattedMessage id="supporter.yourBooky" />
              <br />
              <FormattedMessage id="supporter.yourMembership" />
            </H1>
            <P size="large" ignoreDarkMode color="light" noPadding>
              <FormattedMessage id="supporter.subtitle" />
            </P>
            <ButtonLargeBlue icon="heart" to="/upsell" contentBefore>
              <FormattedMessage
                id="button.supporter"
                values={{ b: (msg) => <b>{msg}</b> }}
              />
            </ButtonLargeBlue>
          </div>
          <Illustration
            name="supporter"
            width="500"
            height="500"
            className="supporter__illustration"
          />
        </Section>

        <Section>
          <H2 style="h1" centered className="supporter__headline">
            <FormattedMessage id="supporter.overviewTitle" />
          </H2>
          <div className="supporter__advantages">
            <div className="supporter__advantage">
              <Icon icon="heart" size="medium" color="primary" />
              <H3 noMargin centered className="supporter__advantage-headline">
                <FormattedMessage id="supporter.bookyTitle" />
              </H3>
              <P noPadding>
                <FormattedMessage id="supporter.bookyText" />
              </P>
            </div>
            <div className="supporter__advantage">
              <Icon icon="coffee" size="medium" color="primary" />
              <H3 noMargin centered className="supporter__advantage-headline">
                <FormattedMessage id="supporter.supportTitle" />
              </H3>
              <P noPadding>
                <FormattedMessage id="supporter.supportText" />
              </P>
            </div>
            <div className="supporter__advantage">
              <Icon icon="lock" size="medium" color="primary" />
              <H3 noMargin centered className="supporter__advantage-headline">
                <FormattedMessage id="supporter.exclusiveTitle" />
              </H3>
              <P noPadding>
                <FormattedMessage id="supporter.exclusiveText" />
              </P>
            </div>
            <div className="supporter__advantage">
              <Icon icon="calendar" size="medium" color="primary" />
              <H3 noMargin centered className="supporter__advantage-headline">
                <FormattedMessage id="supporter.flexibleTitle" />
              </H3>
              <P noPadding>
                <FormattedMessage id="supporter.flexibleText" />
              </P>
            </div>
            <div className="supporter__advantage">
              <Icon icon="money" size="medium" color="primary" />
              <H3 noMargin centered className="supporter__advantage-headline">
                <FormattedMessage id="supporter.amountTitle" />
              </H3>
              <P noPadding>
                <FormattedMessage id="supporter.amountText" />
              </P>
            </div>
          </div>
        </Section>

        <Section contentSpace color="blue">
          <H2 style="h1" noMargin color="light" centered>
            <FormattedMessage id="supporter.compareTitle" />
          </H2>
          <table className="supporter__compare">
            <thead>
              <tr>
                <th className="supporter__compare-head">
                  <H3 style="h2" centered>
                    <FormattedMessage id="supporter.regularMembership" />
                  </H3>
                  <P first color="blue">
                    <FormattedMessage
                      id="supporter.regularText"
                      values={{
                        free: (
                          <strong>
                            {intl.formatMessage({
                              id: 'supporter.free'
                            })}
                          </strong>
                        ),
                        features: (
                          <strong>
                            {intl.formatMessage({
                              id: 'supporter.features'
                            })}
                          </strong>
                        )
                      }}
                    />
                  </P>
                </th>
                <th className="supporter__compare-head booky--hide-mobile">
                  <H3 style="h2" centered>
                    <FormattedMessage id="misc.supporterMembership" />
                  </H3>
                  <P first color="blue">
                    <FormattedMessage
                      id="supporter.supporterText"
                      values={{
                        support: (
                          <strong>
                            {intl.formatMessage({
                              id: 'supporter.support'
                            })}
                          </strong>
                        ),
                        exclusive: (
                          <strong>
                            {intl.formatMessage({
                              id: 'supporter.exclusive'
                            })}
                          </strong>
                        )
                      }}
                    />
                  </P>
                  <P color="blue">
                    <FormattedMessage
                      id="supporter.pricing"
                      values={{
                        price: (
                          <strong className="supporter__price">
                            {intl.formatMessage({
                              id: 'supporter.price'
                            })}
                          </strong>
                        )
                      }}
                    />
                  </P>
                </th>
              </tr>
              <tr>
                <td className="supporter__compare-entry booky--hide-mobile">
                  <P className="supporter__compare-feature">
                    <Icon icon="check" color="blue" />
                    <FormattedMessage id="Unbegrenzte Lesezeichen, Kategorien, und Sammlungen" />
                  </P>
                </td>
                <td className="supporter__compare-entry">
                  <P className="supporter__compare-feature">
                    <Icon icon="check" color="blue" />
                    <FormattedMessage id="Unbegrenzte Lesezeichen, Kategorien, und Sammlungen" />
                  </P>
                </td>
              </tr>
              <tr>
                <td className="supporter__compare-entry booky--hide-mobile">
                  <P className="supporter__compare-feature">
                    <Icon icon="check" color="blue" />
                    <FormattedMessage id="Auf jedem Browser und Endgerät verfügbar" />
                  </P>
                </td>
                <td className="supporter__compare-entry">
                  <P className="supporter__compare-feature">
                    <Icon icon="check" color="blue" />
                    <FormattedMessage id="Auf jedem Browser und Endgerät verfügbar" />
                  </P>
                </td>
              </tr>
              <tr>
                <td className="supporter__compare-entry booky--hide-mobile">
                  <P className="supporter__compare-feature">
                    <Icon icon="check" color="blue" />
                    <FormattedMessage id="Private Sammlungen" />
                  </P>
                </td>
                <td className="supporter__compare-entry">
                  <P className="supporter__compare-feature">
                    <Icon icon="check" color="blue" />
                    <FormattedMessage id="Private Sammlungen" />
                  </P>
                </td>
              </tr>
              <tr>
                <td className="supporter__compare-entry booky--hide-mobile">
                  <P className="supporter__compare-feature">
                    <Icon icon="check" color="blue" />
                    <FormattedMessage id="Individuelles Design" />
                  </P>
                </td>
                <td className="supporter__compare-entry">
                  <P className="supporter__compare-feature">
                    <Icon icon="check" color="blue" />
                    <FormattedMessage id="Individuelles Design" />
                  </P>
                </td>
              </tr>
              <tr>
                <td className="supporter__compare-entry booky--hide-mobile">
                  <P className="supporter__compare-feature">
                    <Icon icon="check" color="blue" />
                    <FormattedMessage id="Schnell, barrierefrei und einfach" />
                  </P>
                </td>
                <td className="supporter__compare-entry">
                  <P className="supporter__compare-feature">
                    <Icon icon="check" color="blue" />
                    <FormattedMessage id="Schnell, barrierefrei und einfach" />
                  </P>
                </td>
              </tr>
              <tr>
                <td className="supporter__compare-entry booky--hide-mobile">
                  <P className="supporter__compare-feature">
                    <Icon icon="check" color="blue" />
                    <FormattedMessage id="Keine Werbung" />
                  </P>
                </td>
                <td className="supporter__compare-entry">
                  <P className="supporter__compare-feature">
                    <Icon icon="check" color="blue" />
                    <FormattedMessage id="Keine Werbung" />
                  </P>
                </td>
              </tr>
              <tr>
                <td className="supporter__compare-entry booky--hide-mobile">
                  <P className="supporter__compare-feature">
                    <Icon icon="check" color="blue" />
                    <FormattedMessage id="Persönlicher Support" />
                  </P>
                </td>
                <td className="supporter__compare-entry">
                  <P className="supporter__compare-feature">
                    <Icon icon="check" color="blue" />
                    <FormattedMessage id="Persönlicher Support" />
                  </P>
                </td>
              </tr>
              <tr className="booky--hide-tablet-desktop">
                <th className="supporter__compare-head">
                  <H3 style="h2" centered>
                    <FormattedMessage id="misc.supporterMembership" />
                  </H3>
                  <P first color="blue">
                    <FormattedMessage
                      id="supporter.supporterText"
                      values={{
                        support: (
                          <strong>
                            {intl.formatMessage({
                              id: 'supporter.support'
                            })}
                          </strong>
                        ),
                        exclusive: (
                          <strong>
                            {intl.formatMessage({
                              id: 'supporter.exclusive'
                            })}
                          </strong>
                        )
                      }}
                    />
                  </P>
                  <P color="blue">
                    <FormattedMessage
                      id="supporter.pricing"
                      values={{
                        price: (
                          <strong className="supporter__price">
                            {intl.formatMessage({
                              id: 'supporter.price'
                            })}
                          </strong>
                        )
                      }}
                    />
                  </P>
                </th>
              </tr>
              <tr className="booky--hide-tablet-desktop">
                <td className="booky--hide-mobile" />
                <td className="supporter__compare-entry">
                  <P className="supporter__compare-feature">
                    <Icon icon="check" color="blue" />
                    <FormattedMessage id="Alle Funktionen der regulären Mitgliedschaft" />
                  </P>
                </td>
              </tr>
              <tr>
                <td className="booky--hide-mobile" />
                <td className="supporter__compare-entry supporter__compare-entry-plus">
                  <P noPadding color="blue" className="supporter__compare-plus">
                    <strong>
                      <i>
                        <FormattedMessage id="PLUS" />
                      </i>
                    </strong>
                  </P>
                  <P className="supporter__compare-feature">
                    <Icon icon="check" color="blue" />
                    <strong>
                      <FormattedMessage id="Teile deine Sammlungen öffentlich" />
                    </strong>
                  </P>
                </td>
              </tr>
              <tr>
                <td className="booky--hide-mobile" />
                <td className="supporter__compare-entry">
                  <P className="supporter__compare-feature">
                    <Icon icon="check" color="blue" />
                    <strong>
                      <FormattedMessage id="Unterstütze uns, booky am Laufen zu halten" />
                    </strong>
                  </P>
                </td>
              </tr>
              <tr>
                <td className="booky--hide-mobile" />
                <td className="supporter__compare-entry">
                  <P className="supporter__compare-feature">
                    <Icon icon="check" color="blue" />
                    <strong>
                      <FormattedMessage id="Zugriff auf alle kommenden Support-Funktionen" />
                    </strong>
                  </P>
                  <ButtonLargeBlue
                    icon="heart"
                    to="/upsell"
                    className="supporter__upsell"
                  >
                    <FormattedMessage
                      id="button.supporter"
                      values={{ b: (msg) => <b>{msg}</b> }}
                    />
                  </ButtonLargeBlue>
                </td>
              </tr>
            </thead>
          </table>
        </Section>

        <Section>
          <H2 style="h1" centered noMargin>
            <FormattedMessage id="supporter.visionTitle" />
          </H2>
          <div className="supporter__vision-wrapper">
            <Illustration
              name="vision"
              className="supporter__vision-illustration"
              width="350"
              height="350"
            />
            <div>
              <P first>
                <FormattedMessage id="supporter.visionText1" />
              </P>
              <P noPadding>
                <FormattedMessage id="supporter.visionText2" />
              </P>
            </div>
          </div>
        </Section>

        <Section contentSpace color="light" noMargin>
          <H2 style="h1" centered noMargin>
            <FormattedMessage id="supporter.faqsTitle" />
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

export default injectIntl(Supporter);
