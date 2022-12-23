import React from "react";
import GoToLogin from "./GoToLogin";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const CartAuth = () => {
  const selectedState = useSelector((state: RootState) => state.auth);
  const { loggedIn } = selectedState;
  return loggedIn ? <Outlet /> : <GoToLogin />;
};

export default CartAuth;
