/* eslint-disable no-empty-function */
/* eslint-disable max-lines */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import { DiscussionEmbed } from 'disqus-react';
import classNames from 'classnames';

import Page from '../../templates/page';
import { H3, H2, Display } from '../../atoms/headline';
import P from '../../atoms/paragraph';
import Icon from '../../atoms/icon';
import { ButtonSmallPrimary } from '../../atoms/button';
import Link from '../../atoms/link';
import Section from '../../molecules/section';
import Expandable from '../../molecules/expandable';
import { List, ListItem } from '../../atoms/list';

import './Help.scss';

class Help extends Component {
  static propTypes = {
    intl: PropTypes.object.isRequired,
    darkMode: PropTypes.bool,
    stickyHeader: PropTypes.bool
  };

  render() {
    const { intl, darkMode, stickyHeader } = this.props;
    const disqusConfig = {
      url: 'https://booky.io/help',
      identifier: 'help',
      title: 'booky.io | Help'
    };
    const introValues = {
      email: (
        <Link to="/contact">
          <FormattedMessage id="help.email" />
        </Link>
      )
    };

    return (
      <Page className={classNames('help', stickyHeader && 'help--sticky')}>
        <Section color="dark" className="help__header">
          <Display noMargin centered color="light">
            <FormattedMessage id="help.title" />
          </Display>
          <H2 noMargin centered ignoreDarkMode color="light">
            <FormattedMessage id="help.intro1" />
          </H2>
          <H2 centered ignoreDarkMode color="light" className="help__subtitle">
            <FormattedMessage id="help.intro2" values={introValues} />
          </H2>
        </Section>

        <Section>
          <H3 style="h1" id="general">
            <FormattedMessage id="help.general" />
          </H3>
          <div className="help-container">
            <Expandable
              headline={<FormattedMessage id="help.general.android" />}
              className="help-container__item"
            >
              <List>
                <ListItem>
                  <FormattedMessage
                    id="help.general.androidtext1"
                    values={{ strong: (msg) => <strong>{msg}</strong> }}
                  />
                </ListItem>
              </List>
            </Expandable>
            <Expandable
              headline={<FormattedMessage id="help.general.ios" />}
              className="help-container__item"
            >
              <List>
                <ListItem>
                  <FormattedMessage
                    id="help.general.iostext1"
                    values={{ strong: (msg) => <strong>{msg}</strong> }}
                  />
                </ListItem>
                <ListItem>
                  <FormattedMessage
                    id="help.general.iostext2"
                    values={{ strong: (msg) => <strong>{msg}</strong> }}
                  />
                </ListItem>
              </List>
            </Expandable>
            <Expandable
              headline={<FormattedMessage id="help.general.macos" />}
              className="help-container__item"
            >
              <P noPadding>
                <FormattedMessage id="help.general.macostext" />
                <Link to="/_assets/downloads/booky.zip">{'macOS App'}</Link>
              </P>
            </Expandable>
            <Expandable
              headline={<FormattedMessage id="help.general.windows" />}
              className="help-container__item"
            >
              <P noPadding>
                <FormattedMessage id="help.general.windowstext" />
                <Link
                  href="https://www.groovypost.com/howto/using-web-apps-new-chromium-edge-windows-10/"
                  target="_blank"
                >
                  {'groovyPost.com'}
                </Link>
              </P>
            </Expandable>
            <Expandable
              headline={<FormattedMessage id="help.bookmarklet.question" />}
              className="help-container__item"
            >
              <P noPadding>
                <FormattedMessage id="bookmarklet.learnMore" />
                <Link to="/bookmarklet">{'booky.io/bookmarklet'}</Link>
              </P>
            </Expandable>
            <Expandable
              headline={<FormattedMessage id="help.general.search" />}
              className="help-container__item"
            >
              <P>
                <strong>{'https://booky.io/?term=%s'}</strong>
              </P>
              <P noPadding>
                <FormattedMessage id="help.general.searchtext" />
                <Link
                  href="https://www.makeuseof.com/tag/create-custom-search-engines-google-chrome/"
                  target="_blank"
                >
                  {'makeuseof.com'}
                </Link>
              </P>
            </Expandable>
          </div>
        </Section>

        <Section color="light" contentSpace>
          <H3 style="h1" id="collections">
            <FormattedMessage id="help.collections" />
          </H3>
          <div className="help-container">
            <Expandable
              headline={<FormattedMessage id="help.collections.question1" />}
              className="help-container__item"
            >
              <P noPadding>
                <FormattedMessage id="help.collections.answer1" />
              </P>
            </Expandable>
            <Expandable
              headline={<FormattedMessage id="help.collections.question2" />}
              className="help-container__item"
            >
              <P noPadding>
                <FormattedMessage
                  id="help.collections.answer2"
                  values={{
                    home: (
                      <Link to="/">
                        <FormattedMessage id="misc.startpage" />
                      </Link>
                    )
                  }}
                />
              </P>
              <ButtonSmallPrimary
                icon="add-collection"
                className="help__button"
                tabIndex="-1"
              >
                <FormattedMessage
                  id="dashboard.add"
                  values={{ b: (msg) => <b>{msg}</b> }}
                />
              </ButtonSmallPrimary>
            </Expandable>
            <Expandable
              headline={<FormattedMessage id="help.collections.question3" />}
              className="help-container__item"
            >
              <P>
                <FormattedMessage id="help.collections.answer3" />
              </P>
              <P noPadding className="help__icon">
                <Icon icon="edit" />
                <FormattedMessage id="dashboard.edit" />
              </P>
              <P noPadding className="help__icon">
                <Icon icon="delete" />
                <FormattedMessage id="dashboard.delete" />
              </P>
              <P noPadding className="help__icon">
                <Icon icon="drag" />
                <FormattedMessage id="dashboard.drag" />
              </P>
            </Expandable>
          </div>
        </Section>

        <Section>
          <H3 style="h1" id="categories">
            <FormattedMessage id="help.categories" />
          </H3>
          <div className="help-container">
            <Expandable
              headline={<FormattedMessage id="help.categories.question1" />}
              className="help-container__item"
            >
              <P noPadding>
                <FormattedMessage id="help.categories.answer1" />
              </P>
            </Expandable>
            <Expandable
              headline={<FormattedMessage id="help.categories.question2" />}
              className="help-container__item"
            >
              <P noPadding>
                <FormattedMessage
                  id="help.categories.answer2"
                  values={{
                    home: (
                      <Link to="/">
                        <FormattedMessage id="misc.startpage" />
                      </Link>
                    )
                  }}
                />
              </P>
              <ButtonSmallPrimary
                icon="add-category"
                className="help__button"
                tabIndex="-1"
              >
                <FormattedMessage
                  id="category.add"
                  values={{ b: (msg) => <b>{msg}</b> }}
                />
              </ButtonSmallPrimary>
            </Expandable>
            <Expandable
              headline={<FormattedMessage id="help.categories.question3" />}
              className="help-container__item"
            >
              <P>
                <FormattedMessage id="help.categories.answer3" />
              </P>
              <P noPadding className="help__icon">
                <Icon icon="edit" />
                <FormattedMessage id="category.edit" />
              </P>
              <P noPadding className="help__icon">
                <Icon icon="delete" />
                <FormattedMessage id="category.delete" />
              </P>
              <P noPadding className="help__icon">
                <Icon icon="expand" />
                <FormattedMessage id="category.expand" />
              </P>
              <P noPadding className="help__icon">
                <Icon icon="sort" />
                <FormattedMessage id="category.sort" />
              </P>
            </Expandable>
            <Expandable
              headline={<FormattedMessage id="help.categories.question4" />}
              className="help-container__item"
            >
              <P>
                <FormattedMessage id="help.categories.answer4" />
              </P>
            </Expandable>
          </div>
        </Section>

        <Section color="light" contentSpace>
          <H3 style="h1" id="bookmarks">
            <FormattedMessage id="help.bookmarks" />
          </H3>
          <div className="help-container">
            <Expandable
              headline={<FormattedMessage id="help.bookmarks.question1" />}
              className="help-container__item"
            >
              <P noPadding>
                <FormattedMessage id="help.bookmarks.answer1" />
              </P>
            </Expandable>
            <Expandable
              headline={<FormattedMessage id="help.bookmarks.question2" />}
              className="help-container__item"
            >
              <P noPadding>
                <FormattedMessage
                  id="help.bookmarks.answer2"
                  values={{
                    home: (
                      <Link to="/">
                        <FormattedMessage id="misc.startpage" />
                      </Link>
                    )
                  }}
                />
              </P>
              <ButtonSmallPrimary
                icon="add-link"
                className="help__button"
                tabIndex="-1"
              >
                <FormattedMessage
                  id="bookmark.add"
                  values={{ b: (msg) => <b>{msg}</b> }}
                />
              </ButtonSmallPrimary>
            </Expandable>
            <Expandable
              headline={<FormattedMessage id="help.bookmarks.question3" />}
              className="help-container__item"
            >
              <P>
                <FormattedMessage id="help.bookmarks.answer3" />
              </P>
              <P noPadding className="help__icon">
                <Icon icon="edit" />
                <FormattedMessage id="bookmark.edit" />
              </P>
              <P noPadding className="help__icon">
                <Icon icon="delete" />
                <FormattedMessage id="bookmark.delete" />
              </P>
              <P noPadding className="help__icon">
                <Icon icon="drag" />
                <FormattedMessage id="bookmark.drag" />
              </P>
              <P noPadding className="help__icon">
                <span className="bookmark__note-icon-wrapper">
                  <Icon icon="note" />
                  <Icon
                    icon="show"
                    size="tiny"
                    color="light"
                    className={classNames(
                      'bookmark__note-icon',
                      darkMode && 'bookmark__note-icon--dark-mode'
                    )}
                  />
                </span>
                <FormattedMessage id="bookmark.noteShow" />
              </P>
            </Expandable>
          </div>
        </Section>

        <Section>
          <H3 style="h1" id="account">
            <FormattedMessage id="help.account" />
          </H3>
          <div className="help-container">
            <Expandable
              headline={<FormattedMessage id="help.account.question1" />}
              className="help-container__item"
            >
              <P noPadding>
                <FormattedMessage id="help.account.answer1" />
                <Link to="/forgot">{'booky.io/forgot'}</Link>
              </P>
            </Expandable>
            <Expandable
              headline={<FormattedMessage id="help.account.question3" />}
              className="help-container__item"
            >
              <P noPadding>
                <FormattedMessage
                  id="help.account.answer3"
                  values={introValues}
                />
              </P>
            </Expandable>
            <Expandable
              headline={<FormattedMessage id="help.account.question2" />}
              className="help-container__item"
            >
              <P noPadding>
                <FormattedMessage
                  id="help.account.answer2"
                  values={{
                    email: (
                      <Link
                        href={`mailto:account@booky.io?subject=${intl.formatMessage(
                          { id: 'misc.deleteSubject' }
                        )}`}
                      >
                        {'account@booky.io'}
                      </Link>
                    )
                  }}
                />
              </P>
            </Expandable>
            <Expandable
              headline={<FormattedMessage id="help.account.question4" />}
              className="help-container__item"
            >
              <P noPadding>
                <FormattedMessage id="help.account.answer4" />
                <Link to="/account#import">{'booky.io/account#import'}</Link>
              </P>
            </Expandable>
            <Expandable
              headline={<FormattedMessage id="help.account.question5" />}
              className="help-container__item"
            >
              <P noPadding>
                <FormattedMessage id="help.account.answer5" />
                <Link to="/account#export">{'booky.io/account#export'}</Link>
              </P>
            </Expandable>
          </div>
          <H3 style="h2" id="supporter">
            <FormattedMessage id="menu.supporter" />
          </H3>
          <div className="help-container">
            <Expandable
              headline={
                <FormattedMessage id="Where can I find more information about memberships?" />
              }
              className="help-container__item"
            >
              <P noPadding>
                <FormattedMessage id="help.supporter.answer1" />
              </P>
            </Expandable>
            <Expandable
              headline={
                <FormattedMessage id="Where can I manage my membership?" />
              }
              className="help-container__item"
            >
              <P noPadding>
                <FormattedMessage id="help.supporter.answer2" />
              </P>
            </Expandable>
            <Expandable
              headline={
                <FormattedMessage id="How much does the supporter membership cost?" />
              }
              className="help-container__item"
            >
              <P noPadding>
                <FormattedMessage id="help.supporter.answer3" />
              </P>
            </Expandable>
            <Expandable
              headline={
                <FormattedMessage id="How do I cancel my supporter membership?" />
              }
              className="help-container__item"
            >
              <P noPadding>
                <FormattedMessage id="help.supporter.answer4" />
              </P>
            </Expandable>
          </div>
        </Section>

        <Section color="light" contentSpace>
          <H3 style="h1" id="registration">
            <FormattedMessage id="help.registration" />
          </H3>
          <div className="help-container">
            <Expandable
              headline={<FormattedMessage id="help.registration.question1" />}
              className="help-container__item"
            >
              <P noPadding>
                <FormattedMessage id="help.registration.answer1" />
                <Link to="/resend">{'booky.io/resend'}</Link>
              </P>
            </Expandable>
          </div>
        </Section>

        <Section>
          <H2 style="h1" noMargin id="comments">
            <FormattedMessage id="help.comments" />
          </H2>
          <DiscussionEmbed shortname="quickbm" config={disqusConfig} />
        </Section>
      </Page>
    );
  }
}

export default injectIntl(Help);
