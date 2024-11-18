import React from "react";
import "../Reigester/Reigester.css";

const Reigester = () => {
  return (
    <div className="reigester">
      <div className="wrapper">
        <div className="title">Reigester</div>
        <form action="#">
          <div className="field">
            <input type="text" required="" />
            <label>Name</label>
          </div>
          <div className="field">
            <input type="text" required="" />
            <label>Email</label>
          </div>
          <div className="field">
            <input type="password" required="" />
            <label>Password</label>
          </div>
          <div className="field">
            <input type="password" required="" />
            <label>Password again</label>
          </div>
          <div className="content">
            <div className="checkbox">
              <input type="checkbox" id="accept" />
              <label htmlFor="accept">I accept all terms and conditions</label>
            </div>
          </div>
          <div className="field">
            <input type="submit" defaultValue="Login" />
          </div>
          <div className="signup-link">
            Already have an account? <a href="/Login">Login now</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reigester;
