import React from "react";
import { NavLink } from "react-router-dom";
import Links from "../assets/links.json";
import {
  UserCircleIcon,
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useSelector,useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { openSidebar } from "../features/shop/shopSlice";

const Navbar = () => {
  const active: object = { color: "#DC2626" };
  const selectLink = () => {
    if(sidebarOpen){
      dispatch(openSidebar())
    } else {
      return null
    }
  }
  const { sidebarOpen } = useSelector((store: RootState) => store.shop);
  const dispatch: AppDispatch = useDispatch();
  return (
    <nav
      className={
        sidebarOpen
          ? "h-screen w-screen bg-black text-white flex flex-col justify-around items-center shadow-lg fixed transition ease-in"
          : "h-11 w-screen bg-black text-white flex justify-around items-center shadow-lg transition ease-in"
      }
    >
      {sidebarOpen ? (
        <button
          className="xl:hidden lg:hidden md:block xs:block sm:block"
          onClick={() => dispatch(openSidebar())}
        >
          <XMarkIcon className="w-6 h-6 text-white" />
        </button>
      ) : (
        <button
          className="xl:hidden lg:hidden md:block xs:block sm:block"
          onClick={() => dispatch(openSidebar())}
        >
          <Bars3Icon className="w-6 h-6 text-white" />
        </button>
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
            <li key={i}>
              <NavLink
                to={link.path}
                end
                style={({ isActive }) => (isActive ? active : undefined)}
                onClick={()=> selectLink()}
              >
                {link.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <ul className="flex">
        <li>
          <NavLink
            to={"/profile"}
            style={({ isActive }) => (isActive ? active : undefined)}
            onClick={()=> selectLink()}
          >
            <UserCircleIcon className="h-6 w-6" />
            {/* <UserIcon/> */}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/cart"}
            style={({ isActive }) => (isActive ? active : undefined)}
            onClick={()=> selectLink()}
          >
            <ShoppingCartIcon className="h-6 w-6" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
