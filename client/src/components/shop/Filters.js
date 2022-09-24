import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useProductsProvider } from "../../shopContex";

const Filters = () => {
  const { getProducts } = useProductsProvider();
  const [search, setSearch] = useState("");
  const searchSubmit = (e) => {
    if (!search) {
      e.preventDefault();
      getProducts(`search=${search}`);
    }
  };
  return (
    <aside className="filters">
      <div className="search">
        <form>
          <input
            type="text"
            placeholder="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" onClick={() => searchSubmit()}>
            <FaSearch />
          </button>
        </form>
      </div>
      <hr />
      <div className="categories">this is categories</div>
      <hr />
      <div className="rating">this is rating</div>
    </aside>
  );
};

export default Filters;
