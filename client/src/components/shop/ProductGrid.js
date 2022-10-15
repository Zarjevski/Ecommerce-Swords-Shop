import React from "react";
import Card from "./Card.js";
import ShopContext from "../../context/ShopContext.js";
import { useContext } from "react";

const ProductGrid = () => {
  const {products,loading} = useContext(ShopContext)
  return (
    <div className="products-grid">
      {products.map((product) => {
        return <Card key={product._id} {...product}/>
      })}
    </div>
  );
};

export default ProductGrid;
