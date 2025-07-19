// Login.jsx
import React from "react";
import "./login.css";
import { useNavigate } from "react-router-dom"; // 👈 for page redirection

const Login = () => {
  const navigate = useNavigate();

  const handleStart = (e) => {
    e.preventDefault(); // prevent form reload
    // 🚀 Redirect directly to homepage
    navigate("/homeScreen");
  };

  return (
    <div className="login">
      <div className="login__background">
        <img
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="Netflix Logo"
          className="login__logo"
        />
      </div>

      <div className="login__gradient" />

      <div className="login__body">
        <h1>Unlimited films, TV programmes and more.</h1>
        <h2>Watch anywhere. Any time.</h2>

        <div className="login__input">
          <form onSubmit={handleStart}>
            <button className="login__start" type="submit">
              GET STARTED
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
