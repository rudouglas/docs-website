/* eslint-disable react/sort-comp */
import React from 'react';
import ErrorMessage from './ErrorMessage';

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    this.props.tessen.track({
      category: 'PageErrored',
      eventName: this.props.eventName,
    });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorMessage />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
