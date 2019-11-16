import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

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
      return (
        <Section>
          <ErrorMessage hasIcon />
        </Section>
      );
    }

    return this.props.children; 
  }
}
