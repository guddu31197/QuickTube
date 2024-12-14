import { useVideo } from "context/videoContext";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./profile.css";

export const Profile = () => {
  const navigate = useNavigate();
  const { setUser, user } = useVideo();
  const logoutHandler = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
    toast.error("Logged Out successfully")
  };

  return (
    <>
      <div className="login-page-container">
        <div className="logout-section">
          <p className="login-tilte">
            Name: {user.name} 
          </p>
          <p className="login-tilte">Email: {user.email}</p>
          <button className="login-button" onClick={logoutHandler }>
            Logout
          </button>
        </div>
      </div>
    </>
  );
};
