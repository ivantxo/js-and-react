import React, { Component, useState } from 'react';

const Composition = () => {
  const onSubmit = userName => console.log(userName);

  return <UserNameForm onSubmit={onSubmit} />
};

const UserNameForm = ({ onSubmit }) => {
  const [userName, setUserName] = useState('');

  return (
    <Form
      onSubmit={ event => {
        onSubmit(userName);
        event.preventDefault();
      }}
    >
      <label>
        Your name:&nbsp;&nbsp;
        <input
          type="text"
          value={ userName }
          onChange={ event => setUserName(event.target.value) }
        />&nbsp;&nbsp;
      </label>

      <button type="submit">Send</button>
    </Form>
  );
};

const Form = ({ onSubmit, children }) => (
  <form onSubmit={ onSubmit }>{ children }</form>
);

export default Composition;
