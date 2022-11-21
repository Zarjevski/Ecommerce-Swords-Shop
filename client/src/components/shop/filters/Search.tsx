import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { addNewParam } from "../../../features/shop/shopSlice";

const Search = () => {
  const dispatch: AppDispatch = useDispatch();
  const [search, setSearch] = useState("");
  useEffect(()=>{
    if(search){
      dispatch(addNewParam({search:search}))
    } else {
      dispatch(addNewParam({}))
    }
  },[search])
  return (
    <form>
      <input
        className="caret-red-500"
        type="text"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </form>
  );
};

export default Search;
