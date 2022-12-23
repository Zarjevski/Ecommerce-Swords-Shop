import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { RootState, AppDispatch } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../features/shop/cartSlice";

const Cart = () => {
  const dispatch: AppDispatch = useDispatch();
  const { cart } = useSelector((state: RootState) => state.cart);
  const totalPrice = cart.reduce((acc:number,current:{price:number})=> acc + current.price,0)
  const items = cart.length;
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
              <h1 className="text-2xl">your cart is empty.</h1>
            </div>
          ) : (
            cart.map((item: any, i: number) => {
              return <CartItem key={i} {...item} />;
            })
          )}
        </div>
        <hr />
        <footer className="w-full flex justify-between self-end m-4">
          <h4 className="text-xl">Total: ${totalPrice}</h4>
          <div>
            <button className="rounded-md bg-pink-500 p-2 ">checkout</button>
            <button
              onClick={() => dispatch(clearCart())}
              className="rounded-md bg-red-600 p-2 "
            >
              clear cart
            </button>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Cart;
