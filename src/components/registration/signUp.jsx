import React, { useRef, useState, useEffect } from "react";
import "./signUp.css";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";

const SignUp = ({ email }) => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (email) {
      passwordRef.current.focus();
    } else {
      emailRef.current.focus();
    }
  }, []);

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        console.log("Signed up:", authUser);
        setErrorMessage("");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        console.log("Signed in:", authUser);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <div className="signup">
      <form>
        <h1>Sign In</h1>
        {errorMessage && (
          <p className="signup__error">
            {errorMessage.substring(9)}
          </p>
        )}
        <input
          placeholder={`${email}` || `Email`}
          type="email"
          ref={emailRef}
          defaultValue={email}
        />
        <input placeholder="Password" type="password" ref={passwordRef} />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>

        <h4>
          <span className="signup__gray">New to Netflix? </span>
          <span className="signup__link" onClick={register}>
            Sign Up Now
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignUp;
