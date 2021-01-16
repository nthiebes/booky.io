/* eslint-disable no-empty-function */
/* eslint-disable max-lines */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import { DiscussionEmbed } from 'disqus-react';
import classNames from 'classnames';

import Page from '../../templates/page';
import { H1, H2 } from '../../atoms/headline';
import P from '../../atoms/paragraph';
import Icon from '../../atoms/icon';
import { ButtonSmallPrimary } from '../../atoms/button';
import Section from '../../molecules/section';
import Bookmarklet from '../../molecules/bookmarklet';
import { javascriptMobile } from '../../molecules/bookmarklet/javascript';
import Link from '../../atoms/link';
import Expandable from '../../molecules/expandable';
import Illustration from '../../atoms/illustration';
import Input from '../../atoms/input';
import { List, ListItem } from '../../atoms/list';

import './Help.scss';

class Help extends Component {
  static propTypes = {
    intl: PropTypes.object.isRequired,
    darkMode: PropTypes.bool
  }

  render() {
    const { intl, darkMode } = this.props;
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

          <H2 id="general">
            <FormattedMessage id="help.general" />
          </H2>
          <div className="help-container">
            <Expandable headline={ <FormattedMessage id="help.general.question1" /> } className="help-container__item">
              <P noPadding>
                <FormattedMessage id="help.general.answer1" />
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
              <P noPadding className="help__icon">
                <Icon icon="drag" />
                <FormattedMessage id="category.sort" />
              </P>
            </Expandable>
            <Expandable headline={ <FormattedMessage id="help.categories.question4" /> } className="help-container__item">
              <P>
                <FormattedMessage id="help.categories.answer4" />
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

          <H2 id="bookmarklet">
            <FormattedMessage id="help.bookmarklet" />
          </H2>
          <div className="help-container">
            <Expandable headline={ <FormattedMessage id="help.bookmarklet.question" /> } className="help-container__item">
              <P>
                <FormattedMessage id="help.bookmarklet.text1" />
              </P>
              <P className="booky--hide-mobile-tablet">
                <FormattedMessage id="help.bookmarklet.text2" />
              </P>
              <Bookmarklet />
              <List className="booky--hide-desktop">
                <ListItem>
                  <FormattedMessage id="bookmarklet.mobile1" />
                </ListItem>
                <ListItem>
                  <FormattedMessage id="bookmarklet.mobile2" />
                  <Input
                    className="help__input"
                    value={ javascriptMobile }
                    onChange={ () => {} }
                    ariaLabel={ intl.formatMessage({ id: 'bookmarklet.mobile.code' }) }
                  />
                </ListItem>
                <ListItem>
                  <FormattedMessage id="bookmarklet.mobile3" />
                </ListItem>
              </List>
              <P className="booky--hide-desktop">
                <FormattedMessage id="bookmarklet.mobile4" />
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
                  email: <Link href={ `mailto:account@booky.io?subject=${intl.formatMessage({ id: 'misc.deleteSubject' })}` }>{ 'account@booky.io' }</Link>
                } } />
              </P>
            </Expandable>
            <Expandable headline={ <FormattedMessage id="help.account.question4" /> } className="help-container__item">
              <P noPadding>
                <FormattedMessage id="help.account.answer4" />
                <Link to="/account#import">
                  {'booky.io/account#import'}
                </Link>
              </P>
            </Expandable>
            <Expandable headline={ <FormattedMessage id="help.account.question5" /> } className="help-container__item">
              <P noPadding>
                <FormattedMessage id="help.account.answer5" />
                <Link to="/account#export">
                  {'booky.io/account#export'}
                </Link>
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

          <H2 id="comments">
            <FormattedMessage id="help.comments" />
          </H2>
          <DiscussionEmbed shortname="quickbm" config={ disqusConfig } />
        </Section>
      </Page>
    );
  }
}

export default injectIntl(Help);
