import React, { useState, useEffect } from "react";
import APIService from "../APIService";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [token, setToken] = useCookies(["mytoken"]);

  let navigate = useNavigate();

  useEffect(() => {
    if (token["mytoken"]) {
      navigate("/");
    }
  }, [token]);

  const loginBtn = () => {
    APIService.LoginUser({ username, password })
      .then((res) => setToken("mytoken", res.token))
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
