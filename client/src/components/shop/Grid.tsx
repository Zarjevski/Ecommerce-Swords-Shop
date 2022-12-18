import React, { useEffect } from "react";
import Card from "./Card";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store";
import { useGetProductsQuery } from "../../features/shop/shopApi";

const Grid = () => {
  const { queryObject } = useSelector((state: RootState) => state.shop);
  const { data, isLoading, error } = useGetProductsQuery(
    new URLSearchParams(queryObject).toString()
  );
  if (error) {
    return <h1>sorry, no products found..</h1>;
  }
  if (isLoading) {
    return <h1>loading...</h1>;
  }
  return (
    <section className="flex flex-col w-full justify-center items-center xl:h-screen md:h-screen sm:h-auto xs:h-auto">
      <div className="grid w-full xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-3 xs:grid-cols-2 sm:grid-rows-4 md:grid-rows-2 xs:grid-rows-4 gap-4 p-4 h-full">
        {data.map((product: any) => {
          const { _id } = product;
          return <Card key={_id} {...product} />;
        })}
      </div>
      <div>1 2 3</div>
    </section>
  );
};

export default Grid;
