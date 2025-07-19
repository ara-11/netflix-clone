// Profile.jsx
import React from "react";
import "./profile.css";
import Nav from "../homeScreen/nav";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  return (
    <div className="profile">
      <Nav />

      <div className="profile__body">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="User Avatar"
          className="profile__avatar"
        />

        <button
          onClick={() => navigate("/homeScreen")}
          className="profile__goback"
        >
          ← Go Back to Home
        </button>
      </div>
    </div>
  );
}

export default Profile;
