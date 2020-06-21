import React, { Component } from 'react';
/*
class Props extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
    };
  }

  toggleShow = () => {
    this.setState(state => ({ isShow: !state.isShow }));
  };

  render() {
    const greeting = 'Welcome to Props';
    return (
      <div>
        <Greeting greeting={greeting} isShow={this.state.isShow} />

        <button onClick={ this.toggleShow } type="button">Toogle Greeting</button>
      </div>
    );
  }
}

const Greeting = ({ greeting, isShow }) => isShow ? <h1>{ greeting }</h1> : null;

export default Props;
*/

// Lifting state
/*
class Props extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShow: true,
    };
  }

  toggleShow = () => {
    this.setState(state => ({ isShow: !state.isShow }));
  };

  render() {
    const greeting = 'Welcome to Props';

    return (
      <div>
        <Greeting greeting={ greeting } isShow={ this.state.isShow } />
        <Button onClick={ this.toggleShow } />
      </div>
    );
  }
}

const Button = ({ onClick }) => (
  <button onClick={onClick} type="button">
    Toggle Show
  </button>
);

const Greeting = ({ greeting, isShow }) =>
  isShow ? <h1>{ greeting }</h1> : null;

export default Props;
*/

// Components as props
class Props extends Component {
  render () {
    const user = {
      name: 'Ivan',
      surname: 'Ramirez',
    };
    return (
      <Profile user={ user }>
        <AvatarRound user={ user } />
      </Profile>
    );
  }
}

const Profile = ({ user, children }) => (
  <div className="profile">
    <div>{ children }</div>
    <div>
      <p>{ user.name }</p>
    </div>
  </div>
);

const AvatarRound = ({ user }) => (
  <img alt="avatar" />
);

export default Props;

// Children as a function
/*
const Props = () => (
  <div>
    <h1>US Dollar to Euro:</h1>
    <Amount>{ amount => <Euro amount={ amount } />}</Amount>

    <h1>US Dollar to Pound:</h1>
    <Amount>{ amount => <Pound amount={ amount } />}</Amount>
  </div>
);

class Amount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: 0,
    };
  }

  onIncrement = () => {
    this.setState(state => ({ amount: state.amount + 1 }));
  };

  onDecrement = () => {
    this.setState(state => ({ amount: state.amount - 1 }));
  };

  render() {
    return (
      <div>
        <button type="button" onClick={ this.onIncrement }>
          +
        </button>
        <button type="button" onClick={ this.onDecrement }>
          -
        </button>
      </div>
    );
  }
}

const Euro = ({ amount }) => <p>Euro: { amount * 0.86 }</p>;
const Pound = ({ amount }) => <p>Pound: { amount * 0.76 }</p>;

export default Props;
*/