import React, { useState } from 'react';

const Composition = () => {
  return (
    <div>
      <UserNameForm onSubmit={ userName => console.log(userName) } />
    </div>
  );
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
        onChange={ setUserName }
        value={ userName }
      >
        Your name:&nbsp;&nbsp;
      </InputField>&nbsp;&nbsp;

      <Button color="violet" type="submit">Send</Button>
    </Form>
  );
};

const Form = ({ onSubmit, children }) => (
  <form onSubmit={ onSubmit }>{ children }</form>
);

const Button = ({ 
  color = 'white', 
  onClick, 
  type = 'button', 
  children, 
}) => (
  <button 
    style={{ backgroundColor: color}}
    type={ type } 
    onClick={ onClick }
  >
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
