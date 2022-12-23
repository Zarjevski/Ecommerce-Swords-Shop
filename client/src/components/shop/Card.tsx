import React from "react";
import { useNavigate } from "react-router-dom";

const Card = (product: any) => {
  const navigate = useNavigate();
  return (
    <div className=" bg-black rounded-md h-full w-full flex flex-col cursor-pointer" onClick={() => navigate(`/shop/product/${product._id}`)}>
      <div className="bg-white h-5/6 w-full">
        <img src="" alt="" className="h-full w-full bg-white"/>
      </div>
      <div className="info-container h-1/6 bg-black flex justify-between items-center p-4">
        <h1 className="text-lg">{product.title}</h1>
        <h1 className="text-lg">${product.price}</h1>
      </div>
    </div>
  );
};

export default Card;
