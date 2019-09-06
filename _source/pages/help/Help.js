import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import Page from '../../templates/page';
import { H1, H2 } from '../../atoms/headline';
import P from '../../atoms/paragraph';
import Section from '../../molecules/section';
import Link from '../../atoms/link';
import Expandable from '../../molecules/expandable';
// import Empty from '../../molecules/empty';

export default class Help extends Component {
  render() {
    const values = {
      email: 
        <Link to="/contact">
          <FormattedMessage id="help.email" />
        </Link> 
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
            <FormattedMessage id="help.faq" />
          </H2>
          <div className="help-container">
            <Expandable headline={ <FormattedMessage id="help.question1" /> } className="help-container__item">
              { 'I love Sami' }
            </Expandable>
            <Expandable headline={ <FormattedMessage id="help.question2" /> } className="help-container__item">
              { 'I love Nico' }
            </Expandable>
            <Expandable headline={ <FormattedMessage id="help.question3" /> } className="help-container__item">
              { 'We are stupid' }
            </Expandable>
            <Expandable headline={ <FormattedMessage id="help.question4" /> } className="help-container__item">
              { 'We are stupid' }
            </Expandable>
            <Expandable headline={ <FormattedMessage id="help.question5" /> } className="help-container__item">
              { 'I love Sami' }
            </Expandable>
            <Expandable headline={ <FormattedMessage id="help.question6" /> } className="help-container__item">
              { 'I love Nico' }
            </Expandable>
            <Expandable headline={ <FormattedMessage id="help.question7" /> } className="help-container__item">
              { 'We are stupid' }
            </Expandable>
            <Expandable headline={ <FormattedMessage id="help.question8" /> } className="help-container__item">
              { 'We are stupid' }
            </Expandable>
            <Expandable headline={ <FormattedMessage id="help.question9" /> } className="help-container__item">
              { 'We are stupid' }
            </Expandable>
            <Expandable headline={ <FormattedMessage id="help.question10" /> } className="help-container__item">
              { 'We are stupid' }
            </Expandable>
          </div>
        </Section>
      </Page>
    );
  }
}

/*
<H1>
  <FormattedMessage id="help.title" />
</H1>
 */
