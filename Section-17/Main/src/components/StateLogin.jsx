import { useState } from "react";

export default function Login() {
  // Here if there a multiple input filed => there a complex useState
  // const [enteredEmial, setEnteredEmail] = useState('');
  // const [enteredPassword, setEnteredPassword] = useState('');
  // so we need a new solution for a General Case:
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: '',
  });

  const emailIsInvalid =
    enteredValues.email !== '' && !enteredValues.email.includes('@');
  function handleSubmit(event) {
    event.preventDefault();

    //for test:
    // console.log('User Email: ' + enteredEmial);
    // console.log('User Password: ' + enteredPassword);
    console.log(enteredValues);
  }

  // function handleEmailChange(event) {
  //   setEnteredEmail(event.target.value);
  // }
  // function handlePasswordChange(event) {
  //   setEnteredPassword(event.target.value);
  // }

  function handleInputChange(identifier, value) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(event) => handleInputChange('email', event.target.value)}
            value={enteredValues.email}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please Enter a Valid Email Address!</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) => handleInputChange('password', event.target.value)}
            value={enteredValues.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
