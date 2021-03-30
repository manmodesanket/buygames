import React from "react";
import "./navbar.css";

const NavItem = ({ item, className }) => {
  return <div className={className}>{item}</div>;
};

export { NavItem };
