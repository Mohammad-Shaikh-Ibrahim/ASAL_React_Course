import React from 'react';
import Input from './Input';

export const userData = {
  name: '',
  email: '',
};

export function App() {
  const nameRef = React.useRef(null);  // Initialize refs to null
  const emailRef = React.useRef(null);

  function handleSaveData() {
    if (nameRef.current && emailRef.current) {  // Ensure refs are not null
      userData.name = nameRef.current.value;
      userData.email = emailRef.current.value;

      console.log(userData);
    } else {
      console.error("Refs are not assigned correctly");
    }
  }

  return (
    <div id="app">
      <Input type="text" label="Your Name" ref={nameRef} />
      <Input type="email" label="Your E-Mail" ref={emailRef} />
      <p id="actions">
        <button onClick={handleSaveData}>Save Data</button>
      </p>
    </div>
  );
}
