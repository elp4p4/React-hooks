
// components/MovieList.js
import React from "react";
import MovieCard from "./MovieCard";
import "../App.css";

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;