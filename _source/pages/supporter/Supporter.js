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
    const { stickyHeader, intl, premium, loggedIn } = this.props;

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
                <FormattedMessage id="supporter.welcome" />
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
                <FormattedMessage id="supporter.subtitle2" />
              ) : (
                <FormattedMessage id="supporter.subtitle" />
              )}
            </P>
            {!premium && (
              <ButtonLargeBlue
                icon={loggedIn ? 'membership' : 'join'}
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
              <FormattedMessage id="supporter.nextsteps" />
            ) : (
              <FormattedMessage id="supporter.overviewTitle" />
            )}
          </H2>
          {premium && (
            <>
              <P size="large">
                <FormattedMessage id="supporter.nextstepsText" />
              </P>
              <ButtonLargeBlue
                icon="account"
                to="/account#supporter"
                contentBefore
                autoWidth
                className="supporter__account"
              >
                <FormattedMessage
                  id="button.editMembership"
                  values={{ b: (msg) => <b>{msg}</b> }}
                />
              </ButtonLargeBlue>
              <ButtonLargeLight icon="feedback" to="/contact">
                <FormattedMessage
                  id="button.feedback"
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
                    <FormattedMessage id="supporter.feature.unlimited" />
                  </P>
                </td>
                <td className="supporter__compare-entry">
                  <P className="supporter__compare-feature" ignoreDarkMode>
                    <Icon icon="check" color="blue" />
                    <FormattedMessage id="supporter.feature.unlimited" />
                  </P>
                </td>
              </tr>
              <tr>
                <td className="supporter__compare-entry booky--hide-mobile">
                  <P className="supporter__compare-feature" ignoreDarkMode>
                    <Icon icon="check" color="blue" />
                    <FormattedMessage id="supporter.feature.devices" />
                  </P>
                </td>
                <td className="supporter__compare-entry">
                  <P className="supporter__compare-feature" ignoreDarkMode>
                    <Icon icon="check" color="blue" />
                    <FormattedMessage id="supporter.feature.devices" />
                  </P>
                </td>
              </tr>
              <tr>
                <td className="supporter__compare-entry booky--hide-mobile">
                  <P className="supporter__compare-feature" ignoreDarkMode>
                    <Icon icon="check" color="blue" />
                    <FormattedMessage id="features.privateCollections" />
                  </P>
                </td>
                <td className="supporter__compare-entry">
                  <P className="supporter__compare-feature" ignoreDarkMode>
                    <Icon icon="check" color="blue" />
                    <FormattedMessage id="features.privateCollections" />
                  </P>
                </td>
              </tr>
              <tr>
                <td className="supporter__compare-entry booky--hide-mobile">
                  <P className="supporter__compare-feature" ignoreDarkMode>
                    <Icon icon="check" color="blue" />
                    <FormattedMessage id="misc.feature5" />
                  </P>
                </td>
                <td className="supporter__compare-entry">
                  <P className="supporter__compare-feature" ignoreDarkMode>
                    <Icon icon="check" color="blue" />
                    <FormattedMessage id="misc.feature5" />
                  </P>
                </td>
              </tr>
              <tr>
                <td className="supporter__compare-entry booky--hide-mobile">
                  <P className="supporter__compare-feature" ignoreDarkMode>
                    <Icon icon="check" color="blue" />
                    <FormattedMessage id="misc.feature11" />
                  </P>
                </td>
                <td className="supporter__compare-entry">
                  <P className="supporter__compare-feature" ignoreDarkMode>
                    <Icon icon="check" color="blue" />
                    <FormattedMessage id="misc.feature11" />
                  </P>
                </td>
              </tr>
              <tr>
                <td className="supporter__compare-entry booky--hide-mobile">
                  <P className="supporter__compare-feature" ignoreDarkMode>
                    <Icon icon="check" color="blue" />
                    <FormattedMessage id="supporter.feature.ads" />
                  </P>
                </td>
                <td className="supporter__compare-entry">
                  <P className="supporter__compare-feature" ignoreDarkMode>
                    <Icon icon="check" color="blue" />
                    <FormattedMessage id="supporter.feature.ads" />
                  </P>
                </td>
              </tr>
              <tr>
                <td className="supporter__compare-entry booky--hide-mobile">
                  <P className="supporter__compare-feature" ignoreDarkMode>
                    <Icon icon="check" color="blue" />
                    <FormattedMessage id="supporter.feature.support" />
                  </P>
                </td>
                <td className="supporter__compare-entry">
                  <P className="supporter__compare-feature" ignoreDarkMode>
                    <Icon icon="check" color="blue" />
                    <FormattedMessage id="supporter.feature.support" />
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
                    <FormattedMessage id="supporter.feature.regular" />
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
                        <FormattedMessage id="misc.plus" />
                      </i>
                    </strong>
                  </P>
                  <P className="supporter__compare-feature" ignoreDarkMode>
                    <Icon icon="check" color="blue" />
                    <strong>
                      <FormattedMessage id="supporter.feature.public" />
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
                      <FormattedMessage id="supporter.feature.coffee" />
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
                      <FormattedMessage id="supporter.feature.future" />
                    </strong>
                  </P>
                  {loggedIn && premium && (
                    <P className="supporter__compare-active" ignoreDarkMode>
                      <i>
                        <FormattedMessage id="supporter.active" />
                      </i>
                    </P>
                  )}
                  {loggedIn && !premium && (
                    <ButtonLargeBlue
                      icon="membership"
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

        <Section contentSpace color="light">
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

        {!loggedIn && (
          <Section className="home__not-a-member" noMargin>
            <Illustration className="home__heart" name="heart" />
            <H2 style="h1" centered noMargin>
              <FormattedMessage id="home.notAMember" />
            </H2>
            <H3 style="h2" noMargin centered>
              <FormattedMessage id="home.promoText" />
            </H3>
            <ButtonLargeBlue
              icon="join"
              to="/join"
              contentBefore
              className="home__join"
            >
              <FormattedMessage
                id="header.register"
                values={{ b: (msg) => <b>{msg}</b> }}
              />
            </ButtonLargeBlue>
            <ButtonLargeLight icon="about" to="/about">
              <FormattedMessage
                id="home.aboutBooky"
                values={{ b: (msg) => <b>{msg}</b> }}
              />
            </ButtonLargeLight>
          </Section>
        )}
      </Page>
    );
  }
}

export default injectIntl(Supporter);
