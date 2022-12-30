import React from "react";
import Row from "../blocks/Row";

const CartItem = (item: {_id: string, title:string, amount: number, price:number}) => {
  return (
    <Row>
      <div className="img-container w-1/5 h-full bg-fuchsia-200"></div>
      <div className="info flex justify-between p-4">
        <h1 className="text-white text-xl">{item.title}</h1>
      </div>
    </Row>
  );
};

export default CartItem;
