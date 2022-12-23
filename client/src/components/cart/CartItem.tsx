import React from "react";

const CartItem = (item: {_id: string, title:string, amount: number, price:number}) => {
  return (
    <article className="rounded-md bg-black h-1/3 w-5/6 flex mt-4">
      <div className="img-container w-1/5 h-full bg-fuchsia-200"></div>
      <div className="info flex justify-between p-4">
        <h1 className="text-white text-xl">{item.title}</h1>
      </div>
    </article>
  );
};

export default CartItem;
