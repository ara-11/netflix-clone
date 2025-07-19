import React, { useState, useEffect } from "react";
import "./nav.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Nav = () => {
	const [show, setShow] = useState(false);
	const navigate = useNavigate();
  const location = useLocation();

	// to only show after scrolling
	const transitionNav = () => {
		if (window.scrollY > 100) {
			setShow(true);
		} else {
			setShow(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", transitionNav);
		// clean up
		return () => window.removeEventListener("scroll", transitionNav);
	}, []);

	return (
		<div className={`nav ${show && "nav__black"}`}>
			<div className="nav__contents">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
					alt=""
					className="nav__logo"
					
				/>
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
					alt=""
					className="nav__avatar"
					onClick={() => navigate("/profile")}
				/>
			</div>
		</div>
	);
};

export default Nav;
