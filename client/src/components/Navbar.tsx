import React from "react";
import { NavLink } from "react-router-dom";
import {
  UserCircleIcon,
  ShoppingCartIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { useDispatch } from "react-redux";
import { openSidebar } from "../features/shop/shopSlice";
// import UserIcon from "./user/UserIcon";

const Navbar = () => {
  const active: object = { color: "red" };
  const { sidebarOpen } = useSelector((store: RootState) => store.shop);
  const dispatch: AppDispatch = useDispatch();
  return (
    <nav
      className={
        sidebarOpen
          ? "h-auto w-screen bg-black text-white flex justify-around items-center shadow-lg"
          : "h-11 w-screen bg-black text-white flex justify-around items-center shadow-lg"
      }
    >
      <button
        className="xl:hidden lg:hidden md:hidden xs:block sm:block"
        onClick={() => dispatch(openSidebar())}
      >
        <Bars3Icon className="w-6 h-6 text-white" />
      </button>
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
        <li>
          <NavLink
            to="/"
            end
            style={({ isActive }) => (isActive ? active : undefined)}
          >
            home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/shop"}
            style={({ isActive }) => (isActive ? active : undefined)}
          >
            shop
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/about"}
            style={({ isActive }) => (isActive ? active : undefined)}
          >
            about
          </NavLink>
        </li>
      </ul>
      <ul className="flex">
        <li>
          <NavLink
            to={"/login"}
            style={({ isActive }) => (isActive ? active : undefined)}
          >
            <UserCircleIcon className="h-6 w-6" />
            {/* <UserIcon/> */}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/cart"}
            style={({ isActive }) => (isActive ? active : undefined)}
          >
          <ShoppingCartIcon className="h-6 w-6" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
