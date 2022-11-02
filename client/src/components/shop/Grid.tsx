import React from "react";
import Card from "./Card";
const Grid = () => {
  return (
    <div className="w-5/6 grid xl:grid-cols-6 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 xs:grid-cols-1 grid-rows-2 gap-4 p-4">
      <Card/>
    </div>
  );
};

export default Grid;
