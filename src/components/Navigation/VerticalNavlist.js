import React from "react";
import { NavItem } from "./NavItem";
import "./navbar.css";

const VerticalNavlist = () => {
  let navList = ["Home", "Explore", "Wishlist", "Cart", "Orders"];
  return (
    <nav className="nav">
      {navList.map((item, i) => (
        <NavItem key={i} item={item} className={"nav__item"} />
      ))}
    </nav>
  );
};

export { VerticalNavlist };
