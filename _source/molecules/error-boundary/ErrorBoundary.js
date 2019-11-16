import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import * as Sentry from '@sentry/browser';

import { ErrorMessage } from '../../atoms/messages';
import Section from '../section/Section';

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
  }

  state = {
    hasError: false
  }

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
      return (
        <Section>
          <ErrorMessage hasIcon noAnimation className="error-boundary" />
        </Section>
      );
    }

    return children; 
  }
}
