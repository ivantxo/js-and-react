import React, { Component } from 'react';

/**
 * Class components shorthand syntax
 */
class Counter extends Component {
  state = {
    counter: 0,
  };

  onIncrement = () => {
    this.setState(state => ({ counter: state.counter + 1 }));
  }

  onDecrement = () => {
    this.setState(state => ({ counter: state.counter - 1 }));
  }

  render () {
    return (
      <div>
        <p>{this.state.counter}</p>

        <button
          onClick={this.onIncrement}>
          Increment
        </button>

        <button
          onClick={this.onDecrement}>
          Decrement
        </button>
      </div>
    );
  }
}

export default Counter;
