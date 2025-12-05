import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign up");

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-details">
          <h2>{currState}</h2>
          <img
            src={assets.cross_icon}
            onClick={() => setShowLogin(false)}
            alt=""
          />
        </div>
        <div className="login-popup-input">
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name" required />
          )}
          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Your password" required />
        </div>
        <button>{currState === "Sign up" ? "Create Account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" />
          <p>By continuing, I agree the terms of use & privacy policy</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new Account?{" "}
            <span onClick={() => setCurrState("Sign up")}>Click Here</span>
          </p>
        ) : (
          <p>
            Already have anAccount?{" "}
            <span onClick={() => setCurrState("Login")}>Login Here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
