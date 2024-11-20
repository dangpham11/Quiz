import React, { useState } from "react";
import "../Login/Login.css";
import { toast } from "react-toastify";
import { loginApi } from "../../Services/UseService";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!username || !password) {
      toast.error("Username/Password is required");
      return;
    }

    let res = await loginApi({ username, password });
    console.log(">>>check: ", res);
    if (res && res.token) {
      localStorage.setItem("token", res.token);
      setIsLoggedIn(true);
      navigate("/home");
    } else {
      if (res && res.status === 401) {
        toast.error(res.title);
      } else {
        toast.error(res);
      }
    }
  };

  return (
    <div className="login">
      <div className="wrapper">
        <div className="title">Login</div>
        <form action="#">
          <div className="field">
            <input
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <label>Username</label>
          </div>
          <div className="field">
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <label>Password</label>
          </div>
          <div className="field">
            <button type="button" onClick={() => handleLogin()}>
              Login
            </button>
          </div>
          <div className="signup-link">
            Not a member? <a href="/Register">Register</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
