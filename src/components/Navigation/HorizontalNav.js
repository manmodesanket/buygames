import React from "react";
import { NavItem } from "./NavItem";
import "./navbar.css";

const HorizontalNav = () => {
  let navList = ["Home", "Explore", "Wishlist", "Cart", "Orders"];
  return (
    <div className="horizontal-nav">
      {navList.map((item, i) => (
        <NavItem key={i} item={item} className={"horizontal-nav__item"} />
      ))}
    </div>
  );
};

export { HorizontalNav };
