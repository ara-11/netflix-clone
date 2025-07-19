import React from "react";
import Nav from "./nav";
import "./homeScreen.css";
import Banner from "./banner";
import Row from "./row";
import requests from "../../requests";

const HomeScreen = () => {
	return (
		<div>
			<Nav />

			<Banner />

			
  <Row
    title="" // ✅ hide title here
    fetchUrl={requests.fetchNetflixOriginals}
    isLargeRow
  />
			<Row title="Trending Now" fetchUrl={requests.fetchTrending} />
			<Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
			<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
			<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
			<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
			<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
			<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
		</div>
	);
};

export default HomeScreen;