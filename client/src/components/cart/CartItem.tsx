import React from "react";
import Row from "../blocks/Row";
import Xbutton from "../buttons/Xbutton";
import H2 from "../elements/H2";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import { removeItem } from "../../features/shop/cartSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { useNavigate } from "react-router-dom";
import { increaseAmount, decreaseAmount } from "../../features/shop/cartSlice";

const CartItem = (item: {
  _id: string;
  title: string;
  amount: number;
  price: number;
  img: Array<string>;
}) => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Row className="h-54 relative">
      <img
        src={item.img[0]}
        alt={item.title}
        className="h-full w-60 hover:cursor-pointer"
        onClick={() => navigate(`/shop/product/${item._id}`)}
      />
      <div>
        <H2>{item.title}</H2>
        <div className="flex">
          <button onClick={() => dispatch(decreaseAmount(item._id))}>
          <MinusIcon
            className="h-6 w-6s"
            
          />
          </button>
          <span>{item.amount}</span>
          <button onClick={() => dispatch(increaseAmount(item._id))}>
            <PlusIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
      <Xbutton
        className="absolute top-0 right-0 m-5"
        onClick={() => dispatch(removeItem(item._id))}
      />
    </Row>
  );
};

export default CartItem;
