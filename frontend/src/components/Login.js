import React from "react";

const Login = () => {
  return (
    <React.Fragment>
      <div className="App">
        <h1>Login</h1>
        <div>
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="form-control"
            placeholder="Username"
          />

          <br />

          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Password"
          />

          <br />

          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
