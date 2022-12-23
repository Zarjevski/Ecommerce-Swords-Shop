import React from "react";
import Categories from "./filters/Categories";
import Rating from "./filters/Rating";
import Search from "./filters/Search";

const Filters = () => {
  return (
    <aside className="w-1/6 h-screen items-center flex lg:block xs:hidden sm:hidden bg-slate-800">
      <Search />
      <Categories/>
      <Rating/>
    </aside>
  );
};

export default Filters;
