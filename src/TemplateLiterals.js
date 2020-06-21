import React, { Component } from 'react';

class TemplateLiterals extends Component {
  // old way
  oldGreeting(what) {
    return 'Welcome to ' + what;
  }

  // String interpolation
  newGreeting(what) {
    return `Welcome to ${what}`;
  }

  // Multi-line strings
  multiGreeting(what) {
    return `
      This
      is
      common
      in GraphQL.
      ${what}
    `;
  }

  render () {
    const oldGreeting = this.oldGreeting('React');
    const newGreeting = this.newGreeting('React');
    const multiGreeting = this.multiGreeting('This is actually a multi-line');
    return (
      <div>
        <div>Old Greeting: {oldGreeting}</div>
        <div>New Greeting: {newGreeting}</div>
        <div>Multi Greeting: {multiGreeting}</div>
      </div>
    );
  }
}

export default TemplateLiterals;
