import React from "react";
import { NavLink } from "react-router-dom";
import { UserCircleIcon, ShoppingCartIcon, Bars3Icon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const active:object = { color: "red" };
  return (
    <nav className="h-11 w-screen bg-black text-white flex justify-around items-center shadow-lg">
      <button className="xl:hidden lg:hidden md:hidden xs:block sm:block"><Bars3Icon className="w-6 h-6 text-white"/></button>
      <div className="logo">
        <h1>SHADOW SHOP</h1>
      </div>
      <ul className="xs:hidden sm:hidden xl:flex lg:flex">
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
            to={"/account"}
            style={({ isActive }) => (isActive ? active : undefined)}
          >
            <UserCircleIcon className="h-6 w-6" />
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
