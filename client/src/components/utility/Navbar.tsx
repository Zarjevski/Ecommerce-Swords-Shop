import React from "react";
import { NavLink } from "react-router-dom";
import Links from "../../assets/links.json";
import NavUl from "../blocks/NavUl";
import NavButton from "../buttons/NavButton";
import CartIcon from "../icons/CartIcon";
import UserIcon from "../icons/UserIcon";

import Nav from "../blocks/Nav";

const Navbar = () => {
  const active: object = { color: "#EC4E1F" };
  return (
    <Nav>
      <NavButton />
      <div className="logo">
        <h1>SHADOW SHOP</h1>
      </div>
      <NavUl>
        {Links.map((link, i) => {
          return (
            <NavLink
              key={i}
              to={link.path}
              end
              style={({ isActive }) => (isActive ? active : undefined)}
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
