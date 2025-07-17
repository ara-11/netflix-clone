import React from "react";
import "./profile.css";
import Nav from "../homeScreen/nav";
import { useSelector } from "react-redux";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";


function Profile() {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  return (
    <div className="profile">
      <Nav />
{/*
  <button onClick={() => navigate("/")} className="profile__goback">
    ← Go Back to Home
  </button>
*/}

      <div className="profile__body">
		
        <h2> Profile</h2>
        <div className="profile__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="User Avatar"
          />
          <div className="profile__details">
            <h2>{user.email}</h2>

            <div className="profile__plans">
              <h3>Plans</h3>

 <div className="profile__plan">
  <div className="profile__planText">
    <h4>Premium</h4>
    <p>4K + HDR</p>
  </div>
  <button className="profile__subscribe">Subscribe</button>
</div>

<div className="profile__plan">
  <div className="profile__planText">
    <h4>Standard</h4>
    <p>1080p</p>
  </div>
  <button className="profile__subscribe">Subscribe</button>
</div>

<div className="profile__plan">
  <div className="profile__planText">
    <h4>Basic</h4>
    <p>720p</p>
  </div>
  <button className="profile__subscribe">Subscribe</button>
</div>


              <button onClick={() => auth.signOut()} className="profile__signout">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
