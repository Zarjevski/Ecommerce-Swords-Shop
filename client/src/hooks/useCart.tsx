import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { setCart } from "../features/shop/cartSlice";

const useCart = () => {
  const { loggedIn } = useSelector((state: RootState) => state.auth);
  const dispatch: AppDispatch = useDispatch();
  const getCartItems = () => {
    const items = JSON.parse(localStorage.getItem("cart") || "[]");
    dispatch(setCart(items))
  };
  return getCartItems;
};

export default useCart;
