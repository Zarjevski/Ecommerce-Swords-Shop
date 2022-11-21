import React from "react";
import { addItem } from "../../features/shop/cartSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { PlusIcon, EyeIcon } from "@heroicons/react/24/outline";
const Card = (product: any) => {
  const dispatch: AppDispatch = useDispatch();
  return (
    <article className="container bg-black rounded-md h-full w-full">
      <div className="img-container w-full h-3/4 bg-fuchsia-200"></div>
      <div className="info flex justify-between p-4">
        <h1 >{product.title}</h1>
        <h1 >${product.price}</h1>
      </div>
      <div className="flex w-full">
        <button
          className="bg-gray-800 flex p-1 w-1/2"
          onClick={() => dispatch(addItem(product))}
        >
          <PlusIcon className="h-6 w-6"/>
          add to cart
        </button>
        <button className="bg-gray-800 flex h-full rounded-sm w-1/2">
          <EyeIcon className="h-6 w-6"/>
          view
        </button>
      </div>
    </article>
  );
};

export default Card;
