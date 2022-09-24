import React from "react";

const Product = (product) => {
  return (
    <article className="product">
      <h1>{product.title}</h1>
    </article>
  );
};

export default Product;
