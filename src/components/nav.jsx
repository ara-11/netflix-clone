import React, { useState, useEffect } from "react";
import "./nav.css";

const Nav = () => {
	const [show, setShow] = useState(false);

	// to only show after scrolling
	const transitionNav = () => {
		if (scrollY > 100) {
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
					src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
					alt=""
					className="nav__logo"
				/>
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
					alt=""
					className="nav__avatar"
				/>
			</div>
		</div>
	);
};

export default Nav;
