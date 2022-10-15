import React from "react";

const Card = (product) => {
  const { _id, title, desc } = product;
  return (
    <article className="product">
      <div className="img-container">
      <img src="" alt={title}/>
      </div>
      <h1>{title}</h1>
      <p>{desc}</p>
    </article>
  );
};

export default Card;
