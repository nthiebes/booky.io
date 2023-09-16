import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, FormattedDate } from 'react-intl';

import { config } from '../../config';
import { H1, H2, H3 } from '../../atoms/headline';
import P from '../../atoms/paragraph';
import { ButtonSmallBlue } from '../../atoms/button';
import Icon from '../../atoms/icon';
import { List, ListItem } from '../../atoms/list';
import Section from '../../molecules/section';
import Expandable from '../../molecules/expandable';
import Page from '../../templates/page';

import './New.scss';

export default class New extends PureComponent {
  static propTypes = {
    updateSettings: PropTypes.func.isRequired,
    newsVersion: PropTypes.number.isRequired
  };

  state = {
    releases: []
  };

  componentDidMount() {
    const { newsVersion, updateSettings } = this.props;

    fetch('https://api.github.com/repos/nthiebes/booky.io/releases?per_page=10')
      .then((response) => response.json())
      .then((releases) => {
        this.setState({
          releases: releases.filter((release) => !release.prerelease)
        });
      })
      .catch();

    if (newsVersion < config.NEWS_VERSION) {
      updateSettings({
        newsVersion: config.NEWS_VERSION
      });
    }
  }

  render() {
    const { releases } = this.state;

    return (
      <Page className="new">
        <Section noMargin>
          <H1 className="new__title">
            <FormattedMessage id="about.updates" />
          </H1>
        </Section>

        <Section color="light" contentSpace>
          <H2>
            <FormattedMessage id="new.update1Title" />
          </H2>
          <P size="small">
            <time>
              <i>
                <FormattedDate
                  value={new Date('2023-09-24 20:22:21')}
                  month="long"
                  day="2-digit"
                  year="numeric"
                />
              </i>
            </time>
          </P>
          <P>
            <FormattedMessage id="supporter.visionText1" />
          </P>
          <P>
            <FormattedMessage id="supporter.visionText2" />
          </P>
          <H3>
            <FormattedMessage id="new.update1Subtitle" />
          </H3>
          <List>
            <ListItem className="new__item">
              <FormattedMessage id="new.update1Feature1" />
              <Icon icon="money" color="blue" />
            </ListItem>
            <ListItem>
              <FormattedMessage id="new.update1Feature2" />
            </ListItem>
          </List>
          <P className="new__learn-more">
            <FormattedMessage id="account.learnMore" />
          </P>
          <ButtonSmallBlue to="/supporter" icon="membership">
            <FormattedMessage
              id="account.discover"
              values={{ b: (msg) => <b>{msg}</b> }}
            />
          </ButtonSmallBlue>
        </Section>

        <Section>
          <H2>
            <FormattedMessage id="new.oldUpdates" />
          </H2>
          <div>
            {/* eslint-disable-next-line camelcase */}
            {releases.map(({ id, name, body, published_at }, index) => {
              const lines = body.split('\n');

              // eslint-disable-next-line no-lone-blocks
              return (
                <Expandable
                  key={id}
                  open={index === 0}
                  headline={
                    <>
                      <span>{`${name} -`}</span>
                      <time className="new__date">
                        <FormattedDate
                          value={new Date(published_at)}
                          month="long"
                          day="2-digit"
                          year="numeric"
                        />
                      </time>
                    </>
                  }
                >
                  <List>
                    {lines.map((line, lineIndex) => (
                      <ListItem key={lineIndex}>
                        {line.replace(/- /g, '')}
                        {lineIndex < lines.length - 1 && <br />}
                      </ListItem>
                    ))}
                  </List>
                </Expandable>
              );
            })}
          </div>
        </Section>
      </Page>
    );
  }
}
