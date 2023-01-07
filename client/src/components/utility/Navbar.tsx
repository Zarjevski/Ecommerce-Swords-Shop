import React from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../../assets/links";
import NavUl from "../blocks/NavUl";
import NavButton from "../buttons/NavButton";
import CartIcon from "../icons/CartIcon";
import UserIcon from "../icons/UserIcon";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store";
import { toggleSidebar } from "../../features/shop/shopSlice";
import Nav from "../blocks/Nav";

const Navbar = () => {
  const { sidebarOpen } = useSelector((state: RootState) => state.shop);
  const dispatch: AppDispatch = useDispatch()
  const active: object = { color: "#EC4E1F" };
  return (
    <Nav>
      <NavButton />
      <div className="logo">
        <h1>SHADOW SHOP</h1>
      </div>
      <NavUl>
        {navLinks.map((link, i) => {
          return (
            <NavLink
              key={i}
              to={link.path}
              end
              style={({ isActive }) => (isActive ? active : undefined)}
              onClick={() => {sidebarOpen? dispatch(toggleSidebar()):null}}
            >
              {link.name}
            </NavLink>
          );
        })}
      </NavUl>
      <ul className="flex">
        <UserIcon to={"/login"} />
        <CartIcon to={"/cart"} />
      </ul>
    </Nav>
  );
};

export default Navbar;
