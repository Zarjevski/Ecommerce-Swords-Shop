import React from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import tw from "tailwind-styled-components";

interface NavLink {
  to: string;
}
const Amount = () => {
  const { cart } = useSelector((state: RootState) => state.cart);
  const amountOfItems = cart.reduce(
    (acc: number, current: { amount: number }) => acc + current.amount,
    0
  );
  return (
    <Wrapper>
      <span className="text-xs text-white">{amountOfItems}</span>
    </Wrapper>
  );
};

const CartIcon: React.FunctionComponent<NavLink> = (props) => {
  const active: object = { color: "#EC4E1F" };
  return (
    <NavLink
      to={props.to}
      style={({ isActive }) => (isActive ? active : undefined)}
      className="m-2 relative"
    >
      <Amount/>
      <ShoppingCartIcon className="h-6 w-6" />
    </NavLink>
  );
};

const Wrapper = tw.div`
  h-3
  w-3
  bg-red-500
  absolute
  right-0
  top-0
  rounded-full
  flex 
  justify-center
  items-center
  p-1
`;

export default CartIcon;
