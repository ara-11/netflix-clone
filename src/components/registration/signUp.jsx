import React, { useRef, useState, useEffect } from "react";
import "./signUp.css";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";

const SignUp = ({ email }) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (email) {
      passwordRef.current.focus();
    } else {
      emailRef.current.focus();
    }
  }, [email]);

  const handleSignIn = async (e) => {
    e.preventDefault();
    const emailValue = emailRef.current?.value?.trim();
    const passwordValue = passwordRef.current?.value;

    if (!emailValue || !passwordValue) {
      setErrorMessage("Please enter both email and password.");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        emailValue,
        passwordValue
      );
      console.log("Signed in:", userCredential.user);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const emailValue = emailRef.current?.value?.trim();
    const passwordValue = passwordRef.current?.value;

    if (!emailValue || !passwordValue) {
      setErrorMessage("Please enter both email and password.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        emailValue,
        passwordValue
      );
      console.log("Signed up:", userCredential.user);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="signup">
      <form onSubmit={handleSignIn}>
        <h1>Sign In</h1>
        {errorMessage && (
          <p className="signup__error">
            {errorMessage.replace("Firebase: ", "")}
          </p>
        )}
        <input
          placeholder="Email"
          type="email"
          ref={emailRef}
          defaultValue={email}
          required
        />
        <input
          placeholder="Password"
          type="password"
          ref={passwordRef}
          required
        />
        <button type="submit">Sign In</button>

        <h4>
          <span className="signup__gray">New to Netflix? </span>
          <span className="signup__link" onClick={handleRegister}>
            Sign Up Now
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignUp;
