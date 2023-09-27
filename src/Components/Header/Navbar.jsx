import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../Style/navbar.css";
import "../../index.css";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
// import "../../Javascript/Navbar";

// Hamburger Button

const Navbar = () => {
  const [Mobile, setMobile] = useState(false);

  return (
    <>
      <nav className="navbar fixed z-[55]">
        <h3 className="logo">Furniture.</h3>

        <ul
          className={Mobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setMobile(false)}
        >
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/product">
            <li>Product</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>

        <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>
    </>
  );
};

export default Navbar;
