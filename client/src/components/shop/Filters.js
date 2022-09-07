import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
const Filters = () => {
  const [search, setSearch] = useState("");
  const searchSubmit = (e) => {
    e.preventDefault();
    setSearch("");
  };
  return (
    <aside className="filters">
      <div className="search">
        <form onSubmit={() => searchSubmit}>
          <input
            type="text"
            placeholder="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">
            <FaSearch />
          </button>
        </form>
      </div>
    </aside>
  );
};

export default Filters;
