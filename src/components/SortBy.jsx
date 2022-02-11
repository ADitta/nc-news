import React from "react";

const SortBy = ({ setSelectedSortBy, setSelectedOrderBy }) => {
  const handleSortChange = (e) => {
    setSelectedSortBy(e.target.value);
  };

  const handleOrderChange = (e) => {
    setSelectedOrderBy(e.target.value);
  };
  return (
    <div className="sort-by">
      <select onChange={handleSortChange} name="" id="query">
        <option value="title">Name</option>
        <option value="votes">Popularity</option>
        <option value="author">Author</option>
        <option value="comment_count">Comments</option>
        <option value="created_at">Posted at</option>
      </select>
      <select onChange={handleOrderChange} name="" id="order">
        <option value="ASC">asc</option>
        <option value="DESC">desc</option>
      </select>
    </div>
  );
};

export default SortBy;
