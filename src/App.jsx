import { useState } from "react";
import HomeScreen from "./components/homeScreen/homeScreen";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/registration/login";

function App() {
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
