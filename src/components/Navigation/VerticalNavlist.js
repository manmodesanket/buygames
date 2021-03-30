import React from "react";
import { NavItem } from "./NavItem";
import "./navbar.css";

const VerticalNavlist = () => {
  let navList = [
    { name: "Home", path: "/" },
    { name: "Explore", path: "/explore" },
    { name: "Wishlist", path: "/wishlist" },
    { name: "Cart", path: "/cart" },
    { name: "Orders", path: "/orders" },
  ];
  return (
    <nav className="nav">
      {navList.map((item, i) => (
        <NavItem key={i} item={item} className={"nav__item"} />
      ))}
    </nav>
  );
};

export { VerticalNavlist };
