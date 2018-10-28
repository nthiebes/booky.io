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

          <section>
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

          <section className="help__section">
            <div>
              <Expandable headline="Wie kann ich dies das Ananas?">
                { 'I love Sami' }
              </Expandable>
            </div>
            <div>
              <Expandable headline="Wie kann ich dies das Ananas?">
                { 'I love Nico' }
              </Expandable>
            </div>
            <div>
              <Expandable headline="Wie kann ich dies das Ananas?">
                { 'We are stupid' }
              </Expandable>
            </div>
          </section>

        </Section>
      </Page>
    );
  }
}
