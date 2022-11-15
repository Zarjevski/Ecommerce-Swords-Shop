import React from "react";

const CartItem = (item: any) => {
    console.log(item);
    
  return (
    <article className="rounded-md bg-black h-1/3 w-1/3">
      <div className="img-container w-full h-3/4 bg-fuchsia-200"></div>
      <div className="info flex justify-between p-4">
        <h1 className="text-white">{item.title}</h1>
      </div>
    </article>
  );
};

export default CartItem;
