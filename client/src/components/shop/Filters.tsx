import React from "react";
import Search from "./filters/Search";

const Filters = () => {
  return (
    <aside className="w-1/6 h-screen items-center flex lg:block xs:hidden sm:hidden border-r-2 border-r-red-500">
      <Search />
    </aside>
  );
};

export default Filters;
