import React, { useEffect, useState } from "react";
import "./banner.css";
import axios from "../../axios";
import requests from "../../requests";
import Row from "./row";

const Banner = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(requests.fetchNetflixOriginals);

        // Filter out movies without a backdrop
        const validMovies = res.data.results.filter(
          (m) => m.backdrop_path && m.overview
        );

        // Pick a random movie
        const chosenMovie =
          validMovies[Math.floor(Math.random() * validMovies.length)];

        console.log("Chosen movie:", chosenMovie); // Debug

        setMovie(chosenMovie);
      } catch (error) {
        console.error("Banner fetch error:", error);
      }
    }

    fetchData();
  }, []);

  function truncate(string, n) {
    return string?.length > n ? string.substring(0, n - 1) + "..." : string;
  }

  if (!movie) {
    return <div className="banner__loading">Loading banner...</div>;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie.title || movie.name || movie.original_name}
        </h1>
		<h1 className="banner__description">
          {truncate(movie.overview, 200)}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button_play">Play</button>
          <button className="banner__button_list">My List</button>
        </div>

<h2 className="banner__rowTitle">NETFLIX ORIGINALS</h2>

      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
