import React from 'react';
import PropTypes from 'prop-types';

export class ErrorBoundary extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error(`${error} : ${errorInfo}`);
    this.setState({ hasError: true });
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;
    return hasError ? (
      <h2 style={{ flexGrow: 1, textAlign: 'center' }}>Something went wrong</h2>
    ) : (
      children
    );
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};
