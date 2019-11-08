import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Page from '../../templates/page';
import Section from '../../molecules/section';

export default class ErrorBoundary extends Component {
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
    ]).isRequired
  }

  state = {
    hasError: false
  }

  // componentDidCatch(error, errorInfo) {
  // You can also log the error to an error reporting service
  // logErrorToMyService(error, errorInfo);
  // }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Page>
          <Section>
            <p>{'wrong'}</p>
          </Section>
        </Page>
      );
    }

    return this.props.children; 
  }
}
