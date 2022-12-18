import React from "react";
import { addItem } from "../../features/shop/cartSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { PlusIcon, EyeIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const Card = (product: any) => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className=" bg-black rounded-md h-full w-full flex flex-col">
      <div className="bg-white h-4/6 w-full">
        <img src="" alt="" className="h-full w-full bg-white"/>
      </div>
      <div className="info-container h-1/6 bg-black flex justify-between items-center p-4">
        <h1 className="text-lg">{product.title}</h1>
        <h1 className="text-lg">${product.price}</h1>
      </div>
      <div className="button-container h-1/6 flex">
        <button
          className="h-full w-1/2 bg-red-500 flex justify-center items-center"
          onClick={() => navigate(`/shop/${product._id}`)}
        >
          VIEW
          <EyeIcon className="h-6 w-6 ml-1" />
        </button>
        <button
          className="h-full w-1/2 bg-red-500 flex justify-center items-center"
          onClick={() => dispatch(addItem(product))}
        >
          ADD TO CART
          <PlusIcon className="h-6 w-6 ml-1" />
        </button>
      </div>
    </div>
  );
};

export default Card;
