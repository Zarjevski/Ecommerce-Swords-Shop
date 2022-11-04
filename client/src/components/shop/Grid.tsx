import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Grid = () => {
  const { products } = useSelector((state: RootState) => state.shop);
  return (
    <div className="w-5/6 grid xl:grid-cols-6 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 xs:grid-cols-1 grid-rows-2 gap-4 p-4">
      {products.map((product: object) => {
        console.log(product);
        return <Card {...product} />;
      })}
    </div>
  );
};

export default Grid;
