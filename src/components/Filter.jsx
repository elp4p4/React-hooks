import React from "react";
import "../App.css";

const Filter = ({ setFilter }) => {
  const handleTitleChange = (e) => {
    setFilter((prev) => ({ ...prev, title: e.target.value }));
  };

  const handleRatingChange = (e) => {
    setFilter((prev) => ({ ...prev, rating: e.target.value }));
  };

  return (
    <div className="filter-container">
      <input
        type="text"
        placeholder="Search by title"
        onChange={handleTitleChange}
        className="filter-input"
      />
      <input
        type="number"
        placeholder="Minimum rating"
        onChange={handleRatingChange}
        className="filter-input"
      />
    </div>
  );
};

export default Filter;