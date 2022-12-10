import React, { useState } from "react";
import APIService from "../APIService";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginBtn = () => {
    APIService.LoginUser({ username, password })
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };

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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <br />

          <button onClick={loginBtn} className="btn btn-primary">
            Login
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
