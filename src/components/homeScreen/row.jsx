import React, { useEffect, useState } from "react";
import "./row.css";
import axios from "../../axios";

const Row = ({ title, fetchUrl, isLargeRow = true }) => {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(fetchUrl);
        setMovies(res.data.results || []);
      } catch (error) {
        console.error("Row fetch error:", error);
      }
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className={`row ${title === "" ? "row--first" : ""}`}>
      {title && <h2>{title}</h2>}
      <div className="row__posters">
        {movies.length === 0 ? (
          <p className="row__loading">Loading movies...</p>
        ) : (
          movies.map((movie) => {
            const imagePath = isLargeRow
              ? movie.poster_path
              : movie.backdrop_path;

            if (!imagePath) return null;

            return (
              <img
                key={movie.id}
                className={`row__poster ${isLargeRow ? "row__posterLarge" : ""}`}
                src={`${base_url}${imagePath}`}
                alt={movie.name || movie.title || "Movie"}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Row;
