import React from "react";
import Item from "./Item";

const Grid = (data: any) => {
  return (
    <>
      <div className="grid w-full xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-3 xs:grid-cols-2 sm:grid-rows-4 md:grid-rows-2 xs:grid-rows-4 gap-4 p-14 h-full">
        {data.data.map((product: any) => {
          const { _id } = product;
          return <Item key={_id} {...product} />;
        })}
      </div>
    </>
  );
};

export default Grid;
