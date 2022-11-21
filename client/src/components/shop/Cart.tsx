import React from "react";
import CartItem from "./CartItem";
import { RootState } from "../../store";
import { useSelector } from "react-redux";

const Cart = () => {
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const items = cartItems.length;
  return (
    <section className="h-screen flex justify-center items-center">
      <div className="h-3/4 w-2/4">
        <header className="flex justify-center m-4">
          <h1 className="text-5xl">CART</h1>
        </header>
        <hr />
        <div className="items flex flex-col h-5/6 p-2">
          {!items ? (
            <div className="w-full flex justify-center items-center h-full">
              <h1 className="text-2xl">your cart is empty</h1>
            </div>
          ) : (
            cartItems.map((item: any) => {
              return <CartItem key={item._id} {...item} />;
            })
          )}
        </div>
        <hr />
        <footer className="w-full flex justify-between self-end m-4">
          <h4 className="text-xl">Total:</h4>
          <button className="rounded-md bg-red-600 p-2 ">checkout</button>
        </footer>
      </div>
    </section>
  );
};

export default Cart;
