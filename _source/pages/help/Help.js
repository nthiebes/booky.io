import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import Page from '../../templates/page';
import { H1, H2, H3 } from '../../atoms/headline';
import P from '../../atoms/paragraph';
import Section from '../../molecules/section';
import Link from '../../atoms/link';
import Expandable from '../../molecules/expandable';

export default class Help extends Component {
  render() {
    const values = {
      email: (
        <Link to="/contact">
          <FormattedMessage id="help.email" />
        </Link>
      )
    };

    return (
      <Page>
        <Section>
          <H1>
            <FormattedMessage id="help.title" />
          </H1>
          <P>
            <FormattedMessage id="help.intro1" />
          </P>
          <P>
            <FormattedMessage id="help.intro2" values={ values } />
          </P>

          <H2>
            <FormattedMessage id="help.beta" />
          </H2>
          <div className="help-container">
            <Expandable headline={ <FormattedMessage id="help.beta.question1" /> } className="help-container__item">
              <FormattedMessage id="help.beta.answer1" />
            </Expandable>
            <Expandable headline={ <FormattedMessage id="help.beta.question2" /> } className="help-container__item">
              <FormattedMessage id="help.beta.answer2" />
            </Expandable>
            <Expandable headline={ <FormattedMessage id="help.beta.question3" /> } className="help-container__item">
              <FormattedMessage id="help.beta.answer3" />
            </Expandable>
          </div>

          <H2>
            <FormattedMessage id="help.general" />
          </H2>
          <H3>
            <FormattedMessage id="help.extensions" />
          </H3>
          <P>
            <FormattedMessage id="help.extensions.text" />
          </P>
          <H3>
            <FormattedMessage id="help.bookmarklet" />
          </H3>
          <P>
            <FormattedMessage id="help.bookmarklet.text" />
          </P>
          <H3>
            <FormattedMessage id="help.customizations" />
          </H3>
          <P>
            <FormattedMessage id="help.customizations.text" />
          </P>

          <H2>
            <FormattedMessage id="help.collections" />
          </H2>
          <div className="help-container">
            <Expandable headline={ <FormattedMessage id="help.collections.question1" /> } className="help-container__item">
              <FormattedMessage id="help.collections.answer1" />
            </Expandable>
            <Expandable headline={ <FormattedMessage id="help.collections.question2" /> } className="help-container__item">
              <FormattedMessage id="help.collections.answer2" />
            </Expandable>
            <Expandable headline={ <FormattedMessage id="help.collections.question3" /> } className="help-container__item">
              <FormattedMessage id="help.collections.answer3" />
            </Expandable>
          </div>

          <H2>
            <FormattedMessage id="help.categories" />
          </H2>
          <div className="help-container">
            <Expandable headline={ <FormattedMessage id="help.categories.question1" /> } className="help-container__item">
              <FormattedMessage id="help.categories.answer1" />
            </Expandable>
            <Expandable headline={ <FormattedMessage id="help.categories.question2" /> } className="help-container__item">
              <FormattedMessage id="help.categories.answer2" />
            </Expandable>
            <Expandable headline={ <FormattedMessage id="help.categories.question3" /> } className="help-container__item">
              <FormattedMessage id="help.categories.answer3" />
            </Expandable>
          </div>

          <H2>
            <FormattedMessage id="help.bookmarks" />
          </H2>
          <div className="help-container">
            <Expandable headline={ <FormattedMessage id="help.bookmarks.question1" /> } className="help-container__item">
              <FormattedMessage id="help.bookmarks.answer1" />
            </Expandable>
            <Expandable headline={ <FormattedMessage id="help.bookmarks.question2" /> } className="help-container__item">
              <FormattedMessage id="help.bookmarks.answer2" />
            </Expandable>
            <Expandable headline={ <FormattedMessage id="help.bookmarks.question3" /> } className="help-container__item">
              <FormattedMessage id="help.bookmarks.answer3" />
            </Expandable>
          </div>

          <H2>
            <FormattedMessage id="help.account" />
          </H2>
          <div className="help-container">
            <Expandable headline={ <FormattedMessage id="help.account.question1" /> } className="help-container__item">
              <FormattedMessage id="help.account.answer1" />
            </Expandable>
            <Expandable headline={ <FormattedMessage id="help.account.question2" /> } className="help-container__item">
              <FormattedMessage id="help.account.answer2" />
            </Expandable>
            <Expandable headline={ <FormattedMessage id="help.account.question3" /> } className="help-container__item">
              <FormattedMessage id="help.account.answer3" />
            </Expandable>
          </div>
        </Section>
      </Page>
    );
  }
}
