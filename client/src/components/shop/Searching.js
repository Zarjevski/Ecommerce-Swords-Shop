import React, { useState , useContext, useEffect} from "react";
import ShopContext from "../../context/ShopContext.js";
const Searching = () => {
  // vars
  const {getData} = useContext(ShopContext)
  const [search, setSearch] = useState("");
  const searchObj = { search: search };
  const searchParams = new URLSearchParams(searchObj).toString();
  // input submit
  const handleSubmit = async (e) => {
    e.preventDefault()
    getData(searchParams);
    setSearch("");
  };
  // test
  useEffect(()=>{
      getData(searchParams)
      // eslint-disable-next-line
  },[searchParams])
  // jsx
  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            className="search-input"
            onChange={(e) => setSearch(e.target.value)}
            name="search"
            value={search}
          />
        </div>
        <button type="submit">search</button>
      </form>
    </div>
  );
};

export default Searching;
