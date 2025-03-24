import React from "react";

function SearchBox({ search }) {
  const handleChange = (e) => {
    search(e.target.value);
  };
  return (
    <div>
      <input
        className="searchingFeild"
        type="search"
        name="seach"
        id="searce"
        placeholder="Search what you want.......?"
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBox;
