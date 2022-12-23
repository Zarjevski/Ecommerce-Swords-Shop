import React from "react";
import Grid from "../shop/Grid";
import Filters from "../shop/Filters";
import Spinner from "../utility/Spinner";
import { useGetProductsQuery } from "../../features/shop/shopApi";
import { useGetCategoryQuery } from "../../features/shop/shopApi";
import { useParams } from "react-router-dom";

const Shop = () => {
  const {category} = useParams()
  const { data, isLoading, error } = category? useGetCategoryQuery(category) : useGetProductsQuery({});
  if (error) {
    return <div className="h-screen w-screen flex justify-items-center items-center">sorry, no products found..</div>;
  }
  if (isLoading) {
    return <div className="h-screen w-screen flex justify-center items-center"><Spinner/></div>;
  }
  return (
    <section className="w-full h-screen flex sm:justify-center xs:justify-center xs:min-h-fit">
      <Filters />
      <Grid data={[...data]}/>
    </section>
  );
};

export default Shop;
