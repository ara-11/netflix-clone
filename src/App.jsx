import { useState, useEffect } from "react";
import HomeScreen from "./components/homeScreen/homeScreen";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/registration/login";
import { auth } from "./firebase";

function App() {
	useEffect(() => {
		// to check if the user is already signed in
		// This onAuthStateChanged is a listener that checks if the user is logged in or not
		const unSubscribe = auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {
				// if there is a user then they are logged in
			} else {
				// the user is logged out
			}
		});
		// return function to clean up the memory
		return () => unSubscribe;
	}, []);
	return (
		<div className="app">
			{/* <HomeScreen /> */}

			<Router>
				<Routes>
					<Route path="/" element={<HomeScreen />} />
					<Route path="/test" element={<Login />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
