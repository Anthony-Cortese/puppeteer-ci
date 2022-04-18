import React, { useState } from "react";

function Login() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault();

    if (email === "username@gmail.com" && password === "password") {
      setIsUserLoggedIn(true);
    } else {
      setIsUserLoggedIn(false);
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 12000);
    }
  };

  return (
    <div className="App">
      <div className="form-wrapper">
        <p className="App-welcome-text">This is the Login page.</p>
        <h1 className="form-header">Login Form</h1>
        {!isUserLoggedIn && (
          <form className="form" onSubmit={login}>
            {error && (
              <p className="form-error-text">
                Please enter a correct username/password.
              </p>
            )}

            <input
              type="email"
              required
              placeholder="Email Address"
              className="form-input form-input__email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              required
              placeholder="Password"
              className="form-input form-input__password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <button type="submit" className="form-submit-button">
              Submit
            </button>
          </form>
        )}
        {isUserLoggedIn && (
          <p className="form-success-message">You are now signed in.</p>
        )}
      </div>
    </div>
  );
}

export default Login;
