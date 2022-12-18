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
    <form className="w-full flex justify-center text-black max-h-60 items-center mt-6">
      <input
        className="outline-red-500 rounded-sm p-1"
        type="text"
        placeholder="Search"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </form>
  );
};

export default Search;
