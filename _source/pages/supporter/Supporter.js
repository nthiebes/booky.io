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
import { ButtonLargeBlue, ButtonLargeLight } from '../../atoms/button';
import Illustration from '../../atoms/illustration';
import Link from '../../atoms/link/Link';

import './Supporter.scss';

class Supporter extends PureComponent {
  static propTypes = {
    intl: PropTypes.object.isRequired,
    premium: PropTypes.bool,
    stickyHeader: PropTypes.bool,
    loggedIn: PropTypes.bool
  };

  render() {
    const { stickyHeader, intl, loggedIn, premium } = this.props;

    return (
      <Page
        showStats={!loggedIn}
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
              {premium ? (
                <FormattedMessage id="Schön, dass du Supporter·in bist!" />
              ) : (
                <>
                  <FormattedMessage id="supporter.yourBooky" />
                  <br />
                  <FormattedMessage id="supporter.yourMembership" />
                </>
              )}
            </H1>
            <P size="large" ignoreDarkMode color="light" noPadding>
              {premium ? (
                <FormattedMessage id="Hier findest du alle Vorteile deiner Mitgliedschaft, sowie Antworten auf häufig gestellte Fragen." />
              ) : (
                <FormattedMessage id="supporter.subtitle" />
              )}
            </P>
            {!premium && (
              <ButtonLargeBlue
                icon={loggedIn ? 'heart' : 'join'}
                to={loggedIn ? '/upsell' : '/join'}
                contentBefore
              >
                {loggedIn ? (
                  <FormattedMessage
                    id="button.supporter"
                    values={{ b: (msg) => <b>{msg}</b> }}
                  />
                ) : (
                  <FormattedMessage
                    id="header.register"
                    values={{ b: (msg) => <b>{msg}</b> }}
                  />
                )}
              </ButtonLargeBlue>
            )}
          </div>
          <Illustration
            name={premium ? 'active-supporter' : 'supporter'}
            width="500"
            height="500"
            className={classNames(
              'supporter__illustration',
              premium && 'supporter__illustration--supporter'
            )}
          />
        </Section>

        <Section
          className={classNames(premium && 'supporter__headline--supporter')}
        >
          <H2 style="h1" centered className="supporter__headline">
            {premium ? (
              <FormattedMessage id="Was möchtest tu tun?" />
            ) : (
              <FormattedMessage id="supporter.overviewTitle" />
            )}
          </H2>
          {premium && (
            <>
              <P size="large" ignoreDarkMode color="light">
                <FormattedMessage id="Alles rund um deine Support-Mitgliedschaft findest du in deinen Account-Einstellungen. Dir gefällt die Mitgliedschaft oder etwas passt nicht? Teile es uns gerne mit!" />
              </P>
              <ButtonLargeBlue
                icon="account"
                to="/account#supporter"
                contentBefore
                className="supporter__account"
              >
                <FormattedMessage
                  id="Mitgliedschaft bearbeiten"
                  values={{ b: (msg) => <b>{msg}</b> }}
                />
              </ButtonLargeBlue>
              <ButtonLargeLight icon="feedback" to="/contact">
                <FormattedMessage
                  id="Feedback geben"
                  values={{ b: (msg) => <b>{msg}</b> }}
                />
              </ButtonLargeLight>
            </>
          )}
          {!premium && (
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
                <Icon icon="lock" size="medium" color="primary" />
                <H3 noMargin centered className="supporter__advantage-headline">
                  <FormattedMessage id="supporter.exclusiveTitle" />
                </H3>
                <P noPadding>
                  <FormattedMessage id="supporter.exclusiveText" />
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
          )}
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
                  <P first color="blue" ignoreDarkMode>
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
                  <P first color="blue" ignoreDarkMode>
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
                  <P color="blue" ignoreDarkMode>
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
                  <P className="supporter__compare-feature" ignoreDarkMode>
                    <Icon icon="check" color="blue" />
                    <FormattedMessage id="Unbegrenzte Lesezeichen, Kategorien, und Sammlungen" />
                  </P>
                </td>
                <td className="supporter__compare-entry">
                  <P className="supporter__compare-feature" ignoreDarkMode>
                    <Icon icon="check" color="blue" />
                    <FormattedMessage id="Unbegrenzte Lesezeichen, Kategorien, und Sammlungen" />
                  </P>
                </td>
              </tr>
              <tr>
                <td className="supporter__compare-entry booky--hide-mobile">
                  <P className="supporter__compare-feature" ignoreDarkMode>
                    <Icon icon="check" color="blue" />
                    <FormattedMessage id="Auf jedem Browser und Endgerät verfügbar" />
                  </P>
                </td>
                <td className="supporter__compare-entry">
                  <P className="supporter__compare-feature" ignoreDarkMode>
                    <Icon icon="check" color="blue" />
                    <FormattedMessage id="Auf jedem Browser und Endgerät verfügbar" />
                  </P>
                </td>
              </tr>
              <tr>
                <td className="supporter__compare-entry booky--hide-mobile">
                  <P className="supporter__compare-feature" ignoreDarkMode>
                    <Icon icon="check" color="blue" />
                    <FormattedMessage id="Private Sammlungen" />
                  </P>
                </td>
                <td className="supporter__compare-entry">
                  <P className="supporter__compare-feature" ignoreDarkMode>
                    <Icon icon="check" color="blue" />
                    <FormattedMessage id="Private Sammlungen" />
                  </P>
                </td>
              </tr>
              <tr>
                <td className="supporter__compare-entry booky--hide-mobile">
                  <P className="supporter__compare-feature" ignoreDarkMode>
                    <Icon icon="check" color="blue" />
                    <FormattedMessage id="Individuelles Design" />
                  </P>
                </td>
                <td className="supporter__compare-entry">
                  <P className="supporter__compare-feature" ignoreDarkMode>
                    <Icon icon="check" color="blue" />
                    <FormattedMessage id="Individuelles Design" />
                  </P>
                </td>
              </tr>
              <tr>
                <td className="supporter__compare-entry booky--hide-mobile">
                  <P className="supporter__compare-feature" ignoreDarkMode>
                    <Icon icon="check" color="blue" />
                    <FormattedMessage id="Schnell, barrierefrei und einfach" />
                  </P>
                </td>
                <td className="supporter__compare-entry">
                  <P className="supporter__compare-feature" ignoreDarkMode>
                    <Icon icon="check" color="blue" />
                    <FormattedMessage id="Schnell, barrierefrei und einfach" />
                  </P>
                </td>
              </tr>
              <tr>
                <td className="supporter__compare-entry booky--hide-mobile">
                  <P className="supporter__compare-feature" ignoreDarkMode>
                    <Icon icon="check" color="blue" />
                    <FormattedMessage id="Keine Werbung" />
                  </P>
                </td>
                <td className="supporter__compare-entry">
                  <P className="supporter__compare-feature" ignoreDarkMode>
                    <Icon icon="check" color="blue" />
                    <FormattedMessage id="Keine Werbung" />
                  </P>
                </td>
              </tr>
              <tr>
                <td className="supporter__compare-entry booky--hide-mobile">
                  <P className="supporter__compare-feature" ignoreDarkMode>
                    <Icon icon="check" color="blue" />
                    <FormattedMessage id="Persönlicher Support" />
                  </P>
                </td>
                <td className="supporter__compare-entry">
                  <P className="supporter__compare-feature" ignoreDarkMode>
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
                  <P first color="blue" ignoreDarkMode>
                    <FormattedMessage
                      id="supporter.supporterText"
                      values={{
                        support: (
                          <strong>
                            <FormattedMessage id="supporter.support" />
                          </strong>
                        ),
                        exclusive: (
                          <strong>
                            <FormattedMessage id="supporter.exclusive" />
                          </strong>
                        )
                      }}
                    />
                  </P>
                  <P color="blue" ignoreDarkMode>
                    <FormattedMessage
                      id="supporter.pricing"
                      values={{
                        price: (
                          <strong className="supporter__price">
                            <FormattedMessage id="supporter.price" />
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
                  <P className="supporter__compare-feature" ignoreDarkMode>
                    <Icon icon="check" color="blue" />
                    <FormattedMessage id="Alle Funktionen der regulären Mitgliedschaft" />
                  </P>
                </td>
              </tr>
              <tr>
                <td className="booky--hide-mobile" />
                <td className="supporter__compare-entry supporter__compare-entry-plus">
                  <P
                    noPadding
                    color="blue"
                    className="supporter__compare-plus"
                    ignoreDarkMode
                  >
                    <strong>
                      <i>
                        <FormattedMessage id="PLUS" />
                      </i>
                    </strong>
                  </P>
                  <P className="supporter__compare-feature" ignoreDarkMode>
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
                  <P className="supporter__compare-feature" ignoreDarkMode>
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
                  <P className="supporter__compare-feature" ignoreDarkMode>
                    <Icon icon="check" color="blue" />
                    <strong>
                      <FormattedMessage id="Zugriff auf alle kommenden Support-Funktionen" />
                    </strong>
                  </P>
                  {loggedIn && !premium && (
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
                  )}
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
              <H3>
                <FormattedMessage id="help.supporter.features" />
              </H3>
              <P>
                <FormattedMessage id="help.supporter.featurestext" />
              </P>
              <P noPadding>
                <FormattedMessage id="help.supporter.featurestext2" />
              </P>
            </div>
            <div className="faq__item">
              <H3>
                <FormattedMessage id="help.supporter.amount" />
              </H3>
              <P noPadding>
                <FormattedMessage
                  id="help.supporter.amounttext"
                  values={{
                    account: (
                      <Link to="/account#supporter">
                        <FormattedMessage id="misc.accountSettings" />
                      </Link>
                    )
                  }}
                />
              </P>
            </div>
            <div className="faq__item">
              <H3>
                <FormattedMessage id="help.supporter.minimum" />
              </H3>
              <P>
                <FormattedMessage id="help.supporter.minimumtext" />
              </P>
              <P noPadding>
                <FormattedMessage id="help.supporter.minimumtext2" />
              </P>
            </div>
            <div className="faq__item">
              <H3>
                <FormattedMessage id="help.supporter.payment" />
              </H3>
              <P noPadding>
                <FormattedMessage id="help.supporter.paymenttext" />
              </P>
            </div>
            <div className="faq__item">
              <H3>
                <FormattedMessage id="help.supporter.data" />
              </H3>
              <P noPadding>
                <FormattedMessage id="help.supporter.datatext" />
              </P>
            </div>
            <div className="faq__item">
              <H3>
                <FormattedMessage id="help.supporter.cancel" />
              </H3>
              <P>
                <FormattedMessage
                  id="help.supporter.canceltext"
                  values={{
                    account: (
                      <Link to="/account#supporter">
                        <FormattedMessage id="misc.accountSettings" />
                      </Link>
                    )
                  }}
                />
              </P>
              <P noPadding>
                <FormattedMessage
                  id="help.supporter.canceltext2"
                  values={{
                    help: (
                      <Link to="/help#supporter">
                        <FormattedMessage id="help.title" />
                      </Link>
                    )
                  }}
                />
              </P>
            </div>
          </div>
        </Section>
      </Page>
    );
  }
}

export default injectIntl(Supporter);
