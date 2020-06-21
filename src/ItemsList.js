import React, { Component } from 'react'

class ItemsList extends Component {
  render () {
    const users = [
      { name: 'Ivan' },
      { name: 'Sonia' },
      { name: 'Judith' },
      { name: 'Blanca' },
    ];

    const skilledUsers = [
      { name: 'Ivan', isDeveloper: true },
      { name: 'Judith', isDeveloper: false },
      { name: 'Sonia', isDeveloper: true },
      { name: 'Blanca', isDeveloper: false },
    ];
  
    return (
      <div>
        <label>Old Way</label>
        <ul>
          {users.map(function (user) {
            return <li>{user.name}</li>;
          })}
        </ul>
        <br />
        <label>New Way</label>
        <ul>
          {users.map(user => <li>{user.name}</li>)}
        </ul>
        <br />
        <label>Developers</label>
        <ul>
          {skilledUsers
            .filter(user => user.isDeveloper)
            .map(user => <li>{user.name}</li>)}
        </ul>
      </div>
    );
  }
}

export default ItemsList;
