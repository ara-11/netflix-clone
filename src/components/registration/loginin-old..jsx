import React, { useState, useRef } from "react";
import "./login.css";
import SignUp from "./signUp";
import { auth } from "../../firebase"; // adjust path as needed

const signInAnonymously = () => {
  auth
    .signInAnonymously()
    .then(() => {
      console.log("Signed in anonymously");
    })
    .catch((error) => {
      console.error("Anonymous sign-in error:", error);
    });
};

const Login = () => {
    const [login, setLogin] = useState(false);
    const userEmailRef = useRef("");

    return (
        <div className="login">
            <div className="login__background">
                <img
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt=""
                    className="login__logo"
                />
                <button className="login__button" onClick={() => setLogin(true)}>
                    Sign In
                </button>
            </div>
            <div className="login__gradient" />

            <div className={`login__body ${login && "login__sign"}`}>
                {login ? (
                    <SignUp email={userEmailRef.current.value} />
                ) : (
                    <>
                        <h1>Unlimited films, Tv programmes and more.</h1>
                        <h2>Watch anywhere. Cancel at any time.</h2>
                        <h3>
                            Ready to watch? Enter your email to create or restart your
                            membership
                        </h3>

                        <div className="login__input">
                            <form>
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    ref={userEmailRef}
                                />

                                <div>
                                <button className="login__start" onClick={() => setLogin(true)}>
                                    GET STARTED
                                </button>

                                </div>
                                

                            </form>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Login;
