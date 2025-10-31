import React from "react";

function Filter({ onCategoryChange }) {
  function handleChange(event) {
    onCategoryChange(event.target.value);
  }

  return (
    <div>
      <select onChange={handleChange}>
        <option value="All">All</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
