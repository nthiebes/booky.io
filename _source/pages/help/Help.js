import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import './Help.scss';

import Page from '../../templates/page';
import { H1 } from '../../atoms/headline';
import P from '../../atoms/paragraph';
import Section from '../../molecules/section';
import Link from '../../atoms/link';
import Expandable from '../../molecules/expandable';

export default class Help extends Component {
  render() {
    return (
      <Page>
        <Section>

          <section className="help-intro">
            <H1>
              <FormattedMessage id="help.title"  />
            </H1>
            <P>
              <FormattedMessage id="help.intro1"  /> 
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
          </section>

          <section className="help-container">
            <div className="help-container__item">
              <Expandable headline={ <FormattedMessage id="help.section1"  /> }>
                { 'I love Sami' }
              </Expandable>
            </div>
            <div className="help-container__item">
              <Expandable headline={ <FormattedMessage id="help.section2"  /> }>
                { 'I love Nico' }
              </Expandable>
            </div>
            <div className="help-container__item">
              <Expandable headline={ <FormattedMessage id="help.section3"  /> }>
                { 'We are stupid' }
              </Expandable>
            </div>
            <div className="help-container__item">
              <Expandable headline={ <FormattedMessage id="help.section4"  /> }>
                { 'We are stupid' }
              </Expandable>
            </div>
            <div className="help-container__item">
              <Expandable headline={ <FormattedMessage id="help.section5"  /> }>
                { 'I love Sami' }
              </Expandable>
            </div>
            <div className="help-container__item">
              <Expandable headline={ <FormattedMessage id="help.section6"  /> }>
                { 'I love Nico' }
              </Expandable>
            </div>
            <div className="help-container__item">
              <Expandable headline={ <FormattedMessage id="help.section7"  /> }>
                { 'We are stupid' }
              </Expandable>
            </div>
            <div className="help-container__item">
              <Expandable headline={ <FormattedMessage id="help.section8"  /> }>
                { 'We are stupid' }
              </Expandable>
            </div>
            <div className="help-container__item">
              <Expandable headline={ <FormattedMessage id="help.section9"  /> }>
                { 'We are stupid' }
              </Expandable>
            </div>
            <div className="help-container__item">
              <Expandable headline={ <FormattedMessage id="help.section10"  /> }>
                { 'We are stupid' }
              </Expandable>
            </div>
          </section>

        </Section>
      </Page>
    );
  }
}
