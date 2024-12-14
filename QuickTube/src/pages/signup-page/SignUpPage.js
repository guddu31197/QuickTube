import { useAuth } from "context/authContext";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export const SignUpPage = () => {
  const {
    signUpHandler,
  } = useAuth();
  const formObj = {
    name: "",
    username: "",
    email: "",
    password: "",
  };
  // const errorMsg = "Invalid Data.."
  const [ errorInput, setErrorInput ] = useState("");
  const [formData, setFormData] = useState(formObj);
  const [confirmPassword, setConfirmPassword] = useState("");
  const submitHandler = () => {
    if(formData.password.length<6 || formData.name === "" || formData.username === "" || formData.email === "" || formData.password !== confirmPassword  ) {
      setErrorInput("Invalid Data..")
    }
    else {
      setErrorInput("")
      signUpHandler(formData);
      toast.success("LoggedIn successfully");
    }
  };
  return (
    <div className="login-page-container">
      <div className="login-wrapper">
        <h1 className="login-tilte">Sign Up</h1>
        <p className="error-input">{errorInput}</p>
        <input
          type="text"
          id="outlined-password-input"
          className="input-box"
          label="user"
          autoComplete="current-password"
          placeholder="Name"
          name="name"
          onInput={(e) => setFormData(prev => ({...prev, [e.target.name]: e.target.value}))}
        />
        <input
          type="text"
          id="outlined-password-input"
          className="input-box"
          label="user"
          autoComplete="current-password"
          placeholder="Userame"
          name="username"
          onInput={(e) => setFormData(prev => ({...prev, [e.target.name]: e.target.value}))}
          />
        <input
          type="email"
          id="outlined-password-input"
          className="input-box"
          label="user"
          autoComplete="current-password"
          placeholder="Email"
          name="email"
          onInput={(e) => setFormData(prev => ({...prev, [e.target.name]: e.target.value}))}
          />
        <input
          type="password"
          label="password"
          id="outlined-password-input"
          className="input-box"
          autoComplete="current-password"
          placeholder="Password"
          name="password"
          onInput={(e) => setFormData(prev => ({...prev, [e.target.name]: e.target.value}))}
        />
        <input
          type="password"
          label="password"
          id="outlined-password-input"
          className="input-box"
          autoComplete="current-password"
          placeholder="Confirm Password"
          onInput={(e) => setConfirmPassword(e.target.value)}
        />
        <button
          className="login-button"
          onClick={submitHandler}
        >
          Create Account
        </button>
        <Link to="/login"> <p className="new-account">Already have a account! Login</p>  </Link>
      </div>
    </div>
  );
};
