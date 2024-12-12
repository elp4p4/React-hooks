// App.js
import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";
import moviesData from "./movies";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState(moviesData);
  const [filter, setFilter] = useState({ title: "", rating: 0 });

  const handleAddMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
      movie.rating >= filter.rating
  );

  return (
    <div className="app-container">
      <div className="app-content">
      <h1 style={{color:"white", fontSize:"50px"}}>Go My Movie</h1>
      <Filter setFilter={setFilter} />
      <MovieList movies={filteredMovies} />
      <AddMovie handleAddMovie={handleAddMovie} />
      </div>
    </div>
  );
};

export default App;