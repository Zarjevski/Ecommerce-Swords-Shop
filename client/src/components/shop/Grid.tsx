import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useGetProductsQuery } from "../../features/shop/shopApi";

const Grid = () => {
  const { queryObject } = useSelector((state: RootState) => state.shop);
  const searchParams = new URLSearchParams(queryObject);
  const paramsToString = searchParams.toString();
  console.log(paramsToString);
  const { data, isLoading } = useGetProductsQuery(paramsToString);
  if (isLoading) {
    return <h1>loading...</h1>;
  }
  return (
    <div className="w-5/6 grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 xs:grid-cols-1 grid-rows-2 gap-4 p-4 h-screen">
      {data.map((product: any) => {
        const { _id } = product;
        return <Card key={_id} {...product} />;
      })}
    </div>
  );
};

export default Grid;
