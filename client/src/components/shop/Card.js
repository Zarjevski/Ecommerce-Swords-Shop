import React from "react";

const Card = (product) => {
  const { _id, title } = product;
  return (
    <article className="product center">
      <div className="img-container">
        <img src="" alt={title} />
      </div>
     <div className="product-info center">
     <h1>{title}</h1>
      <button onClick={() => console.log(_id)}>Add to cart</button>
     </div>
    </article>
  );
};

export default Card;
