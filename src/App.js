import React, { useState } from "react";
import MovieList from "./components/List";
import Filter from "./components/Filter";
import AddMovie from "./components/Add";
import moviesData from "./movies";
import "./App.css";

const App = () => {
  
  // State to manage the list of movies

  const [movies, setMovies] = useState(moviesData);

  // State to manage the filter
  const [filter, setFilter] = useState({ title: "", rating: 0 });
  
  // Function to Add a new movie to the list

  const handleAddMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  // Filtering movies based on the title and rating

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