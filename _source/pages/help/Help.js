import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import './Help.scss';

import Page from '../../templates/page';
import { H1 } from '../../atoms/headline';
import P from '../../atoms/paragraph';
import Section from '../../molecules/section';
import Link from '../../atoms/link';
import Expandable from '../../molecules/expandable';
import Empty from '../../molecules/empty';

export default class Help extends Component {
  render() {
    return (
      <Page>
        <Section>
          <H1>
            <FormattedMessage id="help.title" />
          </H1>
          <P>
            <FormattedMessage id="help.intro1" /> 
            <br />
            <FormattedMessage id="help.intro2" values=
              { 
                { mail: 
                  <Link href="mailto:hello@booky.io">
                    { <FormattedMessage id="help.email" /> }
                  </Link> 
                }
              } 
            />
          </P>

          <div className="help-container">
            <Expandable headline={ <FormattedMessage id="help.section1" /> } className="help-container__item">
              { 'I love Sami' }
            </Expandable>
            <Expandable headline={ <FormattedMessage id="help.section2" /> } className="help-container__item">
              { 'I love Nico' }
            </Expandable>
            <Expandable headline={ <FormattedMessage id="help.section3" /> } className="help-container__item">
              { 'We are stupid' }
            </Expandable>
            <Expandable headline={ <FormattedMessage id="help.section4" /> } className="help-container__item">
              { 'We are stupid' }
            </Expandable>
            <Expandable headline={ <FormattedMessage id="help.section5" /> } className="help-container__item">
              { 'I love Sami' }
            </Expandable>
            <Expandable headline={ <FormattedMessage id="help.section6" /> } className="help-container__item">
              { 'I love Nico' }
            </Expandable>
            <Expandable headline={ <FormattedMessage id="help.section7" /> } className="help-container__item">
              { 'We are stupid' }
            </Expandable>
            <Expandable headline={ <FormattedMessage id="help.section8" /> } className="help-container__item">
              { 'We are stupid' }
            </Expandable>
            <Expandable headline={ <FormattedMessage id="help.section9" /> } className="help-container__item">
              { 'We are stupid' }
            </Expandable>
            <Expandable headline={ <FormattedMessage id="help.section10" /> } className="help-container__item">
              { 'We are stupid' }
            </Expandable>
          </div>

          <Empty illustration="monitor-window">
            <FormattedMessage id="misc.comingSoon" />
          </Empty>
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
