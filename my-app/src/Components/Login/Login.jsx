import React from "react";
import "../Login/Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="wrapper">
        <div className="title">Login Form</div>
        <form action="#">
          <div className="field">
            <input type="text" required="" />
            <label>Email Address</label>
          </div>
          <div className="field">
            <input type="password" required="" />
            <label>Password</label>
          </div>
          <div className="content">
            <div className="checkbox">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <div className="pass-link">
              <a href="/">Forgot password?</a>
            </div>
          </div>
          <div className="field">
            <input type="submit" defaultValue="Login" />
          </div>
          <div className="signup-link">
            Not a member? <a href="/Reigester">Signup now</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
