import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <ul>
      <li>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "inactive")}
          to="/home"
        >
          Home
        </NavLink>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
}
