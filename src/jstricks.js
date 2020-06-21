import React, { Component } from 'react'

class jstricks extends Component {
  iterateobj(marks) {
    for (let i of Object.keys(marks)) {
      console.log(i);
      console.log(marks[i]);
    }
  }

  render () {
    // More tricks here:
    // https://medium.com/dev-bits/a-perfect-guide-for-cracking-a-javascript-interview-a-developers-perspective-23a5c0fa4d0d
    let marks = { physics: 98, maths: 95, chemistry: 90 };
    let stringvar = JSON.stringify(marks);
    // string to obj
    // let objvar = JSON.parse(stringvar);
    this.iterateobj(marks);

    return (
      <div>
        <div>stringvar: {stringvar}</div>
      </div>
    );
  }
}

export default jstricks;
