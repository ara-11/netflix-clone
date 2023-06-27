import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeScreen from "./components/homeScreen/homeScreen";
import Login from "./components/registration/login";
import Profile from "./components/profile/profile";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { logIn, logOut } from "./features/cart/userSlice";

function App() {
	const { user } = useSelector((state) => state.user);
	const dispatch = useDispatch();

	useEffect(() => {
		// to check if the user is already signed in
		// This onAuthStateChanged is a listener that checks if the user is logged in or not
		const unSubscribe = auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {
				// if there is a user then they are logged in
				dispatch(
					logIn({
						uid: userAuth.uid,
						email: userAuth.email,
					})
				);
			} else {
				// the user is logged out
				dispatch(logOut());
			}
		});
		// return function to clean up the memory
		return () => unSubscribe;
	}, [dispatch]);

	return (
		<div className="app">
			<Router>
				{!user ? (
					<Login />
				) : (
					<Routes>
						<Route path="/" element={<HomeScreen />} />
						<Route path="/login" element={<Login />} />
						<Route path="/profile" element={<Profile />} />
					</Routes>
				)}
			</Router>
		</div>
	);
}

export default App;
