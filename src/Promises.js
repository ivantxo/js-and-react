import React, { Component } from 'react';

// const promise = new Promise(() => {});
// const promise = new Promise((res, rej) => res('Yay!'));
const promise = new Promise((res, rej) => rej('Oh no!'));

class Promises extends Component {
  render () {
    console.log(promise);
    return (
      <div>Hello</div>
    );
  }
}

export default Promises;
