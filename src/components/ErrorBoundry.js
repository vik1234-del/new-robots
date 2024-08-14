import React, { Component } from "react";

class ErrorBoundry extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Ooooops!</h1>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundry;
