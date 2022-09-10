import React, { memo, useEffect, useState } from "react";
import Filters from "./Filters";
import Product from "./Product";
import { useProductsProvider } from "../../shopContex";

const Shop = () => {
  const { products, loading } = useProductsProvider();
  return (
    <section className="shop">
      <Filters />
      <div className="products-grid">
        {products.map((product) => {
          const { title } = product;
          return <Product key={product._id} {...product} />;
        })}
      </div>
    </section>
  );
};

export default Shop;
