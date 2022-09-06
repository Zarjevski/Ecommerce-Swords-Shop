// imports
import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
// end of imports

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Viking Shop</h1>
      </div>
      <ul>
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/shop" className="nav-link">
            Products
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/account" className="nav-user-icons">
            <FaUserCircle />
          </Link>
        </li>
        <li>
          <Link to="/cart" className="nav-user-icons">
            <FaShoppingCart />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
