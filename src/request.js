import React from "react";
const API_KEY = "e08065d6a3696c5331d4454115882b50";

const requests = {
  fetchTrending:
    "/trending/all/week?api_key=e08065d6a3696c5331d4454115882b50&language=en-US",
  fetchNetflixOriginals:
    "/discover/tv?api_key=e08065d6a3696c5331d4454115882b50&with_networks=213",
  fetchTopRated:
    "movie/top_rated?api_key=e08065d6a3696c5331d4454115882b50&language=en-US",
  fetchActionMovies:
    "/discover/movie?api_key=e08065d6a3696c5331d4454115882b50&with_genres=28",
  fetchComedyMovies:
    "/discover/movie?api_key=e08065d6a3696c5331d4454115882b50&with_genres=35",
  fetchHorrorMovies:
    "/discover/movie?api_key=e08065d6a3696c5331d4454115882b50&with_genres=27",
  fetchRomanceMovies:
    "/discover/movie?api_key=e08065d6a3696c5331d4454115882b50&with_genres=10749",
  fetchDocumentaries:
    "/discover/movie?api_key=e08065d6a3696c5331d4454115882b50&with_genres=99",
};

export default requests;
