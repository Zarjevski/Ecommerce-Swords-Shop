import React from "react";
import Categories from "./filters/Categories";
import Rating from "./filters/Rating";
import Search from "./filters/Search";
import Sidebar from "../blocks/Sidebar";

const Filters = () => {
  return (
    <Sidebar>
      <Search />
      <Categories/>
      <Rating/>
    </Sidebar>
  );
};

export default Filters;
