import React from "react";
import { NavLink } from "react-router-dom";
import Links from "../../assets/links.json";
import {
  UserCircleIcon,
  ShoppingCartIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Hamburger from "../buttons/Hamburger";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { toggleSidebar } from "../../features/shop/shopSlice";
import Nav from "../blocks/Nav";

const Navbar = () => {
  const active: object = { color: "#EC4E1F" };
  const selectLink = () => {
    if (sidebarOpen) {
      dispatch(toggleSidebar());
    } else {
      return null;
    }
  };
  const { sidebarOpen } = useSelector((store: RootState) => store.shop);
  const dispatch: AppDispatch = useDispatch();
  return (
    <Nav>
      {sidebarOpen ? (
        <button
          className="xl:hidden lg:hidden md:block xs:block sm:block"
          onClick={() => dispatch(toggleSidebar())}
        >
          <XMarkIcon className="w-6 h-6 text-white" />
        </button>
      ) : (
        <Hamburger onClick={() => dispatch(toggleSidebar())} />
      )}
      <div className="logo">
        <h1>SHADOW SHOP</h1>
      </div>
      <ul
        className={
          sidebarOpen
            ? "xs:flex xs:flex-col sm:flex-col sm:flex xl:flex lg:flex"
            : "xs:hidden sm:hidden xl:flex lg:flex"
        }
      >
        {Links.map((link, i) => {
          return (
            <NavLink
              key={i}
              to={link.path}
              end
              style={({ isActive }) => (isActive ? active : undefined)}
              onClick={() => selectLink()}
            >
              {link.name}
            </NavLink>
          );
        })}
      </ul>
      <ul className="flex">
        <NavLink
          to={"/profile"}
          style={({ isActive }) => (isActive ? active : undefined)}
          onClick={() => selectLink()}
        >
          <UserCircleIcon className="h-6 w-6" />
        </NavLink>
        <NavLink
          to={"/cart"}
          style={({ isActive }) => (isActive ? active : undefined)}
          onClick={() => selectLink()}
        >
          <ShoppingCartIcon className="h-6 w-6" />
        </NavLink>
      </ul>
    </Nav>
  );
};

export default Navbar;
