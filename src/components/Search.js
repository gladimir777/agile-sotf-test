import React from "react";

const Search = ({ onSearch, searchTerm }) => {
  const handleChange = (e) => {
    onSearch(e);
  };
  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => handleChange(e)}
        placeholder="Buscar.."
      />
    </div>
  );
};

export default Search;
