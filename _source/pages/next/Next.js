import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { DiscussionEmbed } from 'disqus-react';

import Page from '../../templates/page';
import { H1, H2 } from '../../atoms/headline';
import P from '../../atoms/paragraph';
import Illustration from '../../atoms/illustration';
import Radio from '../../atoms/radio';
import { ButtonLargeBlue } from '../../atoms/button';
import Section from '../../molecules/section';
import Expandable from '../../molecules/expandable';
import Form from '../../molecules/form';

export default class Next extends PureComponent {
  static propTypes = {
    voted: PropTypes.bool.isRequired,
    updateUserData: PropTypes.func.isRequired
  }

  state = {
    pollResults: null,
    pollResultsAnimation: null
  }

  handleSubmit = () => {
    this.props.updateUserData({
      voted: true
    });

    this.setState({
      pollResults: [60, 23, 16]
    });
    window.setTimeout(() => {
      this.setState({
        pollResultsAnimation: [60, 23, 16]
      });
    }, 500);
  }

  render() {
    const { voted } = this.props;
    const { pollResults, pollResultsAnimation } = this.state;
    const disqusConfig = {
      url: 'https://booky.io/next',
      identifier: 'next',
      title: 'booky.io | Next'
    };
    const result1 = pollResultsAnimation ? `${pollResults[0]}%` : '3.5rem';
    const result2 = pollResultsAnimation ? `${pollResults[1]}%` : '3.5rem';
    const result3 = pollResultsAnimation ? `${pollResults[2]}%` : '3.5rem';

    return (
      <Page>
        <Section className="next">
          <span>
            <H1>
              <FormattedMessage id="next.title" />
            </H1>
            <P>
              <FormattedMessage id="Take a look at what we're currently working on and vote for the next feature!" />
            </P>
            <P>
              <FormattedMessage id="New poll options will be available after the winning feature of the previous poll is available. " />
              <FormattedMessage id="The second place of a poll will stay, and two new options will appear." />
            </P>
            <H2>
              <FormattedMessage id="next.current" />
            </H2>
            <Expandable headline={ <FormattedMessage id="Polish the new version of booky" /> }>
              <P noPadding>
                <FormattedMessage id="next.current.more" />
              </P>
            </Expandable>
            <div className="next__feature">
              <H2>
                <FormattedMessage id="What feature would you like to see next?" />
              </H2>
              { voted ? (
                <>
                  <div style={ { width: result1 } } className="next__vote next__vote--option1">{ `${pollResults[0]}%` }</div>
                  <P>
                    <b><FormattedMessage id="Drag & drop bookmarks and categories to other collections" /></b>
                  </P>
                  <div style={ { width: result2 } } className="next__vote next__vote--option2">{ `${pollResults[1]}%` }</div>
                  <P>
                    <b><FormattedMessage id="Duplicate bookmarks finder" /></b>
                  </P>
                  <div style={ { width: result3 } } className="next__vote next__vote--option3">{ `${pollResults[2]}%` }</div>
                  <P>
                    <b><FormattedMessage id="Sorting of bookmarks, categories, and collections by name" /></b>
                  </P>
                </>
              ) : (
                <Form onSubmit={ this.handleSubmit }>
                  <Radio
                    id="poll-option-1"
                    name="poll"
                    onChange={ this.handleRadioChange }
                    value="1"
                    checked
                  >
                    <b><FormattedMessage id="Drag & drop bookmarks and categories to other collections" /></b>
                  </Radio>
                  <Radio
                    id="poll-option-2"
                    name="poll"
                    onChange={ this.handleRadioChange }
                    value="2"
                  >
                    <b><FormattedMessage id="Duplicate bookmarks finder" /></b>
                  </Radio>
                  <Radio
                    id="poll-option-3"
                    name="poll"
                    onChange={ this.handleRadioChange }
                    value="3"
                  >
                    <b><FormattedMessage id="Sorting of bookmarks, categories, and collections by name" /></b>
                  </Radio>
                  <ButtonLargeBlue contentBefore icon="vote">
                    {'Vote'}
                  </ButtonLargeBlue>
                </Form>
              ) }
            </div>
          </span>
          <Illustration
            name="next"
            className="next__illustration booky--hide-mobile-tablet"
          />
        </Section>
        <Section>
          <H2 nomargin>
            <FormattedMessage id="help.comments" />
          </H2>
          <DiscussionEmbed shortname="quickbm" config={ disqusConfig } />
        </Section>
      </Page>
    );
  }
}
