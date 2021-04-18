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
  const allVotes = results[0].votes + results[1].votes + results[2].votes;
  const onePercent = 100 / (allVotes || 1);

  return [
    Math.round(onePercent * results[0].votes),
    Math.round(onePercent * results[1].votes),
    Math.round(onePercent * results[2].votes)
  ];
};

export default class Next extends PureComponent {
  static propTypes = {
    voted: PropTypes.bool.isRequired,
    getPollResults: PropTypes.func.isRequired,
    vote: PropTypes.func.isRequired,
    updateUserData: PropTypes.func.isRequired
  };

  state = {
    pending: true,
    error: null,
    pollResults: null,
    pollPercentages: null,
    pollResultsAnimation: false,
    votePending: false,
    activeValue: null,
    voteError: null,
    voted: this.props.voted
  };

  componentDidMount() {
    const { getPollResults, voted } = this.props;

    getPollResults({
      onSuccess: (data) => {
        this.setState({
          pending: false,
          pollResults: data,
          pollPercentages: getPollPercentages(data)
        });

        this.timeout = window.setTimeout(() => {
          this.setState({
            pollResultsAnimation: voted
          });
        }, 500);
      },
      onError: (error) => {
        this.setState({
          pending: false,
          error
        });
      }
    });
  }

  componentWillUnmount() {
    window.clearTimeout(this.timeout);
  }

  timeout;

  handleRadioChange = (event) => {
    this.setState({
      activeValue: Number(event.value)
    });
  };

  handleSubmit = () => {
    const { vote, updateUserData } = this.props;
    const { activeValue, pollResults } = this.state;

    this.setState({
      votePending: true
    });

    vote({
      id: activeValue,
      onSuccess: () => {
        const newPollResults = [...pollResults];
        const option = newPollResults.findIndex(({ id }) => id === activeValue);

        newPollResults[option].votes = newPollResults[option].votes + 1;

        updateUserData({
          settings: {
            voted: true
          }
        });

        this.setState({
          pollResults: newPollResults,
          pollPercentages: getPollPercentages(newPollResults),
          votePending: false,
          voted: true
        });

        this.timeout = window.setTimeout(() => {
          this.setState({
            pollResultsAnimation: true
          });
        }, 500);
      },
      onError: (voteError) => {
        this.setState({
          votePending: false,
          voteError
        });
      }
    });
  };

  render() {
    const {
      pollResults,
      pending,
      pollPercentages,
      pollResultsAnimation,
      error,
      votePending,
      voteError,
      voted
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
            <H2>
              <FormattedMessage id="next.current" />
            </H2>
            <Expandable headline={<FormattedMessage id="next.current.title" />}>
              <P noPadding>
                <FormattedMessage id="next.current.more" />
              </P>
            </Expandable>
            <H2>
              <FormattedMessage id="next.upcoming" />
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
              <>
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
                <P className="next__text">
                  <FormattedMessage id="next.text" />
                </P>
              </>
            )}
            {!voted && pollResults && (
              <Form onSubmit={this.handleSubmit}>
                <Radio
                  id="poll-option-1"
                  name="poll"
                  onChange={this.handleRadioChange}
                  value={`${pollResults[0].id}`}
                  className="next__option"
                  required
                >
                  <b>
                    <FormattedMessage id={pollResults[0].name} />
                  </b>
                </Radio>
                <Radio
                  id="poll-option-2"
                  name="poll"
                  onChange={this.handleRadioChange}
                  value={`${pollResults[1].id}`}
                  className="next__option"
                >
                  <b>
                    <FormattedMessage id={pollResults[1].name} />
                  </b>
                </Radio>
                <Radio
                  id="poll-option-3"
                  name="poll"
                  onChange={this.handleRadioChange}
                  value={`${pollResults[2].id}`}
                  className="next__option"
                >
                  <b>
                    <FormattedMessage id={pollResults[2].name} />
                  </b>
                </Radio>
                {voteError && <ErrorMessage message={voteError} hasIcon />}
                <ButtonLargeBlue
                  contentBefore
                  icon="vote"
                  pending={votePending}
                  disabled={votePending}
                >
                  <FormattedMessage id="Abstimmen" />
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
