/* eslint-disable max-lines */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { DiscussionEmbed } from 'disqus-react';
import classNames from 'classnames';

import Page from '../../templates/page';
import { H1, H2 } from '../../atoms/headline';
import P from '../../atoms/paragraph';
import Icon from '../../atoms/icon';
import { ButtonSmallPrimary } from '../../atoms/button';
import Section from '../../molecules/section';
import Link from '../../atoms/link';
import Expandable from '../../molecules/expandable';
import Illustration from '../../atoms/illustration';

import './Help.scss';

export default class Help extends Component {
  static propTypes = {
    darkMode: PropTypes.bool
  }

  render() {
    const { darkMode } = this.props;
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
    const betaValues = {
      link: (
        <Link href="https://booky.io/settings">
          { 'https://booky.io/settings' }
        </Link>
      )
    };

    return (
      <Page>
        <Section>
          <H1 className="help-headline">
            <FormattedMessage id="help.title" />
          </H1>
          <P className="help-intro">
            <FormattedMessage id="help.intro1" />
          </P>
          <P className="help-intro">
            <FormattedMessage id="help.intro2" values={ introValues } />
          </P>
          <Illustration name="help" className="help-illustration booky--hide-mobile" />

          <H2 id="beta">
            <FormattedMessage id="help.beta" />
          </H2>
          <div className="help-container">
            <Expandable headline={ <FormattedMessage id="help.beta.question1" /> } className="help-container__item">
              <P noPadding>
                <FormattedMessage id="help.beta.answer1" />
              </P>
            </Expandable>
            <Expandable headline={ <FormattedMessage id="help.beta.question2" /> } className="help-container__item">
              <P noPadding>
                <FormattedMessage id="help.beta.answer2" values={ betaValues } />
              </P>
            </Expandable>
          </div>

          <H2 id="bookmarks">
            <FormattedMessage id="help.bookmarks" />
          </H2>
          <div className="help-container">
            <Expandable headline={ <FormattedMessage id="help.bookmarks.question1" /> } className="help-container__item">
              <P noPadding>
                <FormattedMessage id="help.bookmarks.answer1" />
              </P>
            </Expandable>
            <Expandable headline={ <FormattedMessage id="help.bookmarks.question2" /> } className="help-container__item">
              <P noPadding>
                <FormattedMessage id="help.bookmarks.answer2" values={ {
                  home: <Link to="/"><FormattedMessage id="misc.startpage" /></Link>
                } } />
              </P>
              <ButtonSmallPrimary
                icon="add-link"
                className="help__button"
                tabIndex="-1"
              >
                <FormattedMessage id="bookmark.add" values={ { b: (msg) => <b>{msg}</b> } } />
              </ButtonSmallPrimary>
            </Expandable>
            <Expandable headline={ <FormattedMessage id="help.bookmarks.question3" /> } className="help-container__item">
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
                    className={ classNames('bookmark__note-icon', darkMode && 'bookmark__note-icon--dark-mode') }
                  />
                </span>
                <FormattedMessage id="bookmark.noteShow" />
              </P>
            </Expandable>
          </div>

          <H2 id="categories">
            <FormattedMessage id="help.categories" />
          </H2>
          <div className="help-container">
            <Expandable headline={ <FormattedMessage id="help.categories.question1" /> } className="help-container__item">
              <P noPadding>
                <FormattedMessage id="help.categories.answer1" />
              </P>
            </Expandable>
            <Expandable headline={ <FormattedMessage id="help.categories.question2" /> } className="help-container__item">
              <P noPadding>
                <FormattedMessage id="help.categories.answer2" values={ {
                  home: <Link to="/"><FormattedMessage id="misc.startpage" /></Link>
                } } />
              </P>
              <ButtonSmallPrimary
                icon="add-category"
                className="help__button"
                tabIndex="-1"
              >
                <FormattedMessage id="category.add" values={ { b: (msg) => <b>{msg}</b> } } />
              </ButtonSmallPrimary>
            </Expandable>
            <Expandable headline={ <FormattedMessage id="help.categories.question3" /> } className="help-container__item">
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
            </Expandable>
          </div>

          <H2 id="collections">
            <FormattedMessage id="help.collections" />
          </H2>
          <div className="help-container">
            <Expandable headline={ <FormattedMessage id="help.collections.question1" /> } className="help-container__item">
              <P noPadding>
                <FormattedMessage id="help.collections.answer1" />
              </P>
            </Expandable>
            <Expandable headline={ <FormattedMessage id="help.collections.question2" /> } className="help-container__item">
              <P noPadding>
                <FormattedMessage id="help.collections.answer2" values={ {
                  home: <Link to="/"><FormattedMessage id="misc.startpage" /></Link>
                } } />
              </P>
              <ButtonSmallPrimary
                icon="add-collection"
                className="help__button"
                tabIndex="-1"
              >
                <FormattedMessage id="dashboard.add" values={ { b: (msg) => <b>{msg}</b> } } />
              </ButtonSmallPrimary>
            </Expandable>
            <Expandable headline={ <FormattedMessage id="help.collections.question3" /> } className="help-container__item">
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

          <H2 id="account">
            <FormattedMessage id="help.account" />
          </H2>
          <div className="help-container">
            <Expandable headline={ <FormattedMessage id="help.account.question1" /> } className="help-container__item">
              <P noPadding>
                <FormattedMessage id="help.account.answer1" />
                <Link to="/forgot">
                  {'booky.io/forgot'}
                </Link>
              </P>
            </Expandable>
            <Expandable headline={ <FormattedMessage id="help.account.question3" /> } className="help-container__item">
              <P noPadding>
                <FormattedMessage id="help.account.answer3" values={ introValues } />
              </P>
            </Expandable>
            <Expandable headline={ <FormattedMessage id="help.account.question2" /> } className="help-container__item">
              <P noPadding>
                <FormattedMessage id="help.account.answer2" values={ {
                  email: <Link href="mailto:account@booky.io">{ 'account@booky.io' }</Link>
                } } />
              </P>
            </Expandable>
          </div>

          <H2 id="registration">
            <FormattedMessage id="help.registration" />
          </H2>
          <div className="help-container">
            <Expandable headline={ <FormattedMessage id="help.registration.question1" /> } className="help-container__item">
              <P noPadding>
                <FormattedMessage id="help.registration.answer1" />
                <Link to="/resend">
                  {'booky.io/resend'}
                </Link>
              </P>
            </Expandable>
          </div>

          {/* <H2>
            <FormattedMessage id="help.extensions" />
          </H2>
          <P>
            <FormattedMessage id="help.extensions.text" />
          </P>
          <H2>
            <FormattedMessage id="help.bookmarklet" />
          </H2>
          <P>
            <FormattedMessage id="help.bookmarklet.text" />
          </P>
          <Bookmarklet />
          <H2>
            <FormattedMessage id="help.customizations" />
          </H2>
          <P>
            <FormattedMessage id="help.customizations.text" />
          </P>

          <H2>
            <FormattedMessage id="help.collections" />
          </H2>
          <P />

          <H2>
            <FormattedMessage id="help.categories" />
          </H2>
          <P />

          <H2>
            <FormattedMessage id="help.bookmarks" />
          </H2>
          <P />

          <H2>
            <FormattedMessage id="help.account" />
          </H2>
          <P /> */}

          <H2 id="comments">
            <FormattedMessage id="help.comments" />
          </H2>
          <DiscussionEmbed shortname="quickbm" config={ disqusConfig } />
        </Section>
      </Page>
    );
  }
}
