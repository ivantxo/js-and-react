import React, { useState } from 'react';

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
      <InputField
        value={ userName }
        onChange={ setUserName }
      >
        Your name:&nbsp;&nbsp;
      </InputField>&nbsp;&nbsp;

      <Button type="submit">Send</Button>
    </Form>
  );
};

const Form = ({ onSubmit, children }) => (
  <form onSubmit={ onSubmit }>{ children }</form>
);

const Button = ({ onClick, type = 'button', children }) => (
  <button type={ type } onClick={ onClick }>
    { children }
  </button>
);

const InputField = ({ onChange, type = 'text', value, children }) => (
  <label>
    { children }
    <input
      type={ type }
      value={ value }
      onChange={ event => onChange(event.target.value) }
    />
  </label>
);

export default Composition;
