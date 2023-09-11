import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import * as Sentry from '@sentry/browser';
import { FormattedMessage } from 'react-intl';

import { ErrorMessage } from '../../atoms/messages';
import Link from '../../atoms/link';
import Section from '../section';
import Empty from '../empty';

export default class ErrorBoundary extends PureComponent {
  static getDerivedStateFromError() {
    return {
      hasError: true
    };
  }

  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.element,
      PropTypes.string
    ]).isRequired,
    dashboardsError: PropTypes.string
  };

  state = {
    hasError: false
  };

  componentDidCatch(error, errorInfo) {
    Sentry.withScope((scope) => {
      scope.setExtras(errorInfo);
      Sentry.captureException(error);
    });
  }

  render() {
    const { dashboardsError, children } = this.props;
    const { hasError } = this.state;

    if (hasError || dashboardsError) {
      if (dashboardsError === 'error.notFound.dashboard') {
        return (
          <Section>
            <Empty illustration="404">
              <FormattedMessage
                id="notFound.figureText"
                values={{
                  mail: (
                    <Link to="/contact">
                      <FormattedMessage id="error.email" />
                    </Link>
                  ),
                  home: (
                    <Link to="/">
                      <FormattedMessage id="misc.startpage" />
                    </Link>
                  )
                }}
              />
            </Empty>
          </Section>
        );
      }

      return (
        <Section>
          <ErrorMessage hasIcon noAnimation className="error-boundary" />
        </Section>
      );
    }

    return children;
  }
}
