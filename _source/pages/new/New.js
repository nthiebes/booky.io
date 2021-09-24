import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, FormattedDate } from 'react-intl';

import { config } from '../../config';
import Page from '../../templates/page';
import { H1 } from '../../atoms/headline';
import Section from '../../molecules/section';
import { List, ListItem } from '../../atoms/list';
import Expandable from '../../molecules/expandable';

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
        <Section>
          <H1 id="new" className="new__title">
            <FormattedMessage id="about.updates" />
          </H1>
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
