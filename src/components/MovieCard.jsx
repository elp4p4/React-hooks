// components/MovieCard.js
import React from "react";
import "../App.css";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card" style={{animationDelay: "800ms"}}>
      <img src={movie.posterURL} alt={`${movie.title} poster`} className="movie-poster" />
      <h3 className="movie-title">{movie.title}</h3>
      <p className="movie-description">{movie.description}</p>
      <p className="movie-rating">⭐Rating: {movie.rating}</p>
    </div>
  );
};

export default MovieCard;