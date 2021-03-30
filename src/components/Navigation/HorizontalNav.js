import React from "react";
import { NavItem } from "./NavItem";
import "./navbar.css";

const HorizontalNav = () => {
  let navList = [
    { name: "Home", path: "/" },
    { name: "Explore", path: "/explore" },
    { name: "Wishlist", path: "/wishlist" },
    { name: "Cart", path: "/cart" },
    { name: "Orders", path: "/orders" },
  ];
  return (
    <div className="horizontal-nav">
      {navList.map((item, i) => (
        <NavItem key={i} item={item} className={"horizontal-nav__item"} />
      ))}
    </div>
  );
};

export { HorizontalNav };
