import React, { useState, useEffect } from "react";
import APIService from "../APIService";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [token, setToken] = useCookies(["mytoken"]);

  const [isLogin, setLogin] = useState(true);

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

  const registerBtn = () => {};

  return (
    <React.Fragment>
      <div className="App">
        {isLogin ? <h1>Please, Login</h1> : <h1>Create New Account</h1>}
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

          {isLogin ? (
            <button onClick={loginBtn} className="btn btn-primary">
              Login
            </button>
          ) : (
            <button onClick={registerBtn} className="btn btn-primary">
              Register
            </button>
          )}

          <div className="mb-3">
            <br />
            {isLogin ? (
              <h5>
                Don't have an account{" "}
                <button
                  className="btn btn-primary"
                  onClick={() => setLogin(false)}
                >
                  Register
                </button>
              </h5>
            ) : (
              <h5>
                Have an account{" "}
                <button
                  className="btn btn-primary"
                  onClick={() => setLogin(true)}
                >
                  Login
                </button>
              </h5>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
