import React from "react";
import { useNavigate } from "react-router-dom";

const Item = (product: {
  _id: string;
  title: string;
  price: number;
  img: Array<string>;
}) => {
  const navigate = useNavigate();
  return (
    <div
      className="h-96 w-60 flex flex-col cursor-pointer"
      onClick={() => navigate(`/shop/product/${product._id}`)}
    >
      <img
        src={product.img[0]}
        alt={product.title}
        className="h-5/6 w-full bg-white"
      />
      <div className="p-2">
        <h1 className="text-md">{product.title}</h1>
        <h1 className="text-md">${product.price}</h1>
      </div>
    </div>
  );
};

export default Item;
