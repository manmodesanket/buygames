import React from "react";
import "./navbar.css";
import { Link } from "@reach/router";

const NavItem = ({ item, className }) => {
  return (
    <Link to={item.path} className={`link ${className}`}>
      {item.name}
    </Link>
  );
};

export { NavItem };
