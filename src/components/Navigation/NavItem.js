import React from "react";
import "./navbar.css";
import { Link } from "@reach/router";

const NavItem = ({ item, className }) => {
  console.log(item);
  return (
    <div className={className}>
      <Link to={item.path} className="link">
        {item.name}
      </Link>
    </div>
  );
};

export { NavItem };
