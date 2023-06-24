import React, { useEffect, useState } from "react";
import "./row.css";
import axios from "../../axios";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
	const [movies, setMovies] = useState([]);
	// For the images
	const base_url = "https://image.tmdb.org/t/p/original/";

	useEffect(() => {
		async function fetchData() {
			try {
				const res = await axios.get(fetchUrl);
				setMovies(res.data.results);
				return res;
			} catch (error) {
				console.log(error);
			}
		}
		fetchData();
	}, [fetchUrl]);

	return (
		<div className="row">
			{title}
			<div className="row__posters">
				{movies.map(
					(movie) =>
						// to prevent broken links thus they are cut out
						((isLargeRow && movie.poster_path) ||
							(!isLargeRow && movie.backdrop_path)) && (
							<img
								key={movie.id}
								className={`row__poster ${isLargeRow && "row__posterLarge"}`}
								src={`${base_url}${
									isLargeRow ? movie.poster_path : movie.backdrop_path
								}`}
								alt={movie.name}
							/>
						)
				)}
			</div>
		</div>
	);
};

export default Row;
