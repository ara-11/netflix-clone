import React, { useEffect, useState } from "react";
import "./banner.css";
import axios from "../../axios";
import requests from "../../requests";

const Banner = () => {
	const [movie, setMovie] = useState([]);

	useEffect(() => {
		async function fetchData() {
			try {
				const res = await axios.get(requests.fetchNetflixOriginals);

				let chosenMovie =
					res.data.results[
						Math.floor(Math.random() * res.data.results.length - 1)
					];
				if (chosenMovie.backdrop_path === "") {
					chosenMovie =
						res.data.results[
							Math.floor(Math.random() * res.data.results.length - 1)
						];
				}

				setMovie(chosenMovie);
				return res; // async function must return something
			} catch (error) {
				console.log(error);
			}
		}
		fetchData();
	}, []);
	// to truncate the description if it too long
	function truncate(string, n) {
		return string?.length > n ? string.substring(0, n - 1) + "..." : string;
	}

	return (
		<header
			className="banner"
			style={{
				backgroundSize: "cover",
				backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
				backgroundPosition: "center center",
			}}
		>
			<div className="banner__contents">
				<h1 className="banner__title">
					{movie?.title || movie?.name || movie?.original_name}
				</h1>
				<div className="banner__buttons">
					<button className="banner__button">Play</button>
					<button className="banner__button">My List</button>
				</div>

				<h1 className="banner__description">
					{truncate(`${movie?.overview}`, 200) || "Awesome Movie"}
				</h1>
			</div>

			<div className="banner--fadeBottom" />
		</header>
	);
};

export default Banner;
