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
import Skeleton from '../../atoms/skeleton';
import { ErrorMessage } from '../../atoms/messages';
import Section from '../../molecules/section';
import Expandable from '../../molecules/expandable';
import Form from '../../molecules/form';

const getPollPercentages = (results) => {
  const onePercent =
    (results[0].votes + results[1].votes + results[2].votes) / 100;

  return [
    Math.round(onePercent * results[0].votes),
    Math.round(onePercent * results[1].votes),
    Math.round(onePercent * results[2].votes)
  ];
};

export default class Next extends PureComponent {
  static propTypes = {
    voted: PropTypes.bool.isRequired,
    updateSettings: PropTypes.func.isRequired,
    getPollResults: PropTypes.func.isRequired
  };

  state = {
    pending: true,
    error: null,
    pollResults: null,
    pollPercentages: null,
    pollResultsAnimation: false
  };

  componentDidMount() {
    const { getPollResults } = this.props;

    getPollResults({
      onSuccess: (data) => {
        this.setState({
          pending: false,
          pollResults: data,
          pollPercentages: getPollPercentages(data)
        });
      },
      onError: (error) => {
        this.setState({
          pending: false,
          error
        });
      }
    });

    this.timeout = window.setTimeout(() => {
      this.setState({
        pollResultsAnimation: this.props.voted
      });
    }, 500);
  }

  componentWillUnmount() {
    window.clearTimeout(this.timeout);
  }

  timeout;

  handleRadioChange = (event) => {
    const pollResults = [...this.state.pollResults];

    pollResults[event.value].votes = pollResults[event.value].votes + 1;

    this.setState({
      pollResults,
      pollPercentages: getPollPercentages(pollResults)
    });
  };

  handleSubmit = () => {
    this.props.updateSettings({
      voted: true
    });

    this.timeout = window.setTimeout(() => {
      this.setState({
        pollResultsAnimation: true
      });
    }, 500);
  };

  render() {
    const { voted } = this.props;
    const {
      pollResults,
      pending,
      pollPercentages,
      pollResultsAnimation,
      error
    } = this.state;
    const disqusConfig = {
      url: 'https://booky.io/next',
      identifier: 'next',
      title: 'booky.io | Next'
    };
    let result1, result2, result3;

    if (pollPercentages) {
      result1 = pollResultsAnimation ? `${pollPercentages[0]}%` : '3.5rem';
      result2 = pollResultsAnimation ? `${pollPercentages[1]}%` : '3.5rem';
      result3 = pollResultsAnimation ? `${pollPercentages[2]}%` : '3.5rem';
    }

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
              <FormattedMessage id="New poll options will be available after the winning feature of the previous poll is completed." />
              <FormattedMessage id="The second place of a poll will stay, and two new options will be available." />
            </P>
            <H2>
              <FormattedMessage id="next.current" />
            </H2>
            <Expandable headline={<FormattedMessage id="next.current.title" />}>
              <P noPadding>
                <FormattedMessage id="next.current.more" />
              </P>
            </Expandable>
            <H2>
              <FormattedMessage id="What feature would you like to see next?" />
            </H2>
            {pending && (
              <>
                <Skeleton className="next__skeleton" />
                <Skeleton className="next__skeleton" />
                <Skeleton className="next__skeleton" />
              </>
            )}
            {error && <ErrorMessage message={error} hasIcon />}
            {voted && pollPercentages && (
              <div className="next__results">
                <div
                  style={{ width: result1 }}
                  className="next__vote next__vote--option1"
                >{`${pollPercentages[0]}%`}</div>
                <P>
                  <b>
                    <FormattedMessage id={pollResults[0].name} />
                  </b>
                </P>
                <div
                  style={{ width: result2 }}
                  className="next__vote next__vote--option2"
                >{`${pollPercentages[1]}%`}</div>
                <P>
                  <b>
                    <FormattedMessage id={pollResults[1].name} />
                  </b>
                </P>
                <div
                  style={{ width: result3 }}
                  className="next__vote next__vote--option3"
                >{`${pollPercentages[2]}%`}</div>
                <P>
                  <b>
                    <FormattedMessage id={pollResults[2].name} />
                  </b>
                </P>
              </div>
            )}
            {!voted && pollResults && (
              <Form onSubmit={this.handleSubmit}>
                <Radio
                  id="poll-option-1"
                  name="poll"
                  onChange={this.handleRadioChange}
                  value="0"
                  checked
                >
                  <b>
                    <FormattedMessage id={pollResults[0].name} />
                  </b>
                </Radio>
                <Radio
                  id="poll-option-2"
                  name="poll"
                  onChange={this.handleRadioChange}
                  value="1"
                >
                  <b>
                    <FormattedMessage id={pollResults[1].name} />
                  </b>
                </Radio>
                <Radio
                  id="poll-option-3"
                  name="poll"
                  onChange={this.handleRadioChange}
                  value="2"
                >
                  <b>
                    <FormattedMessage id={pollResults[2].name} />
                  </b>
                </Radio>
                <ButtonLargeBlue contentBefore icon="vote">
                  {'Vote'}
                </ButtonLargeBlue>
              </Form>
            )}
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
          <DiscussionEmbed shortname="quickbm" config={disqusConfig} />
        </Section>
      </Page>
    );
  }
}
