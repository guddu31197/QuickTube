import React, { useEffect, useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "context/authContext";
import { useVideo } from "context/videoContext";

export const LoginPage = () => {
  const { loginHandler, setEmail, email, password, setPassword } = useAuth();
  const {user} = useVideo();

  return (
    <div className="login-page-container">
      <div className="login-wrapper">
        <h1 className="login-tilte">Login</h1>
        <input
          type="text"
          id="outlined-password-input"
          className="input-box"
          label="user"
          autoComplete="current-password"
          placeholder="User Name"
          value={email}
          onInput={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          label="password"
          id="outlined-password-input"
          className="input-box"
          autoComplete="current-password"
          placeholder="Password"
          value={password}
          onInput={(e) => setPassword(e.target.value)}
        />
        <button
          className="demo-login-button"
          onClick={() => {
            loginHandler("rocky4", "123456");
            toast.success("loggedIn SuccesFully");
          }}
        >
          Login with guest user
        </button>
        <button
          className="login-button"
          onClick={() => loginHandler(email, password)}
        >
          Login
        </button>
          <div > <Link to="/signup" ><p className="new-account">Create a new account</p>  </Link></div>
       
      </div>
    </div>
  );
};
