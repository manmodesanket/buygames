import React from "react";
import "./navbar.css";

const Navlist = () => {
  return (
    <nav className="nav">
      <div className="nav__item">Home</div>
      <div className="nav__item">Categories</div>
      <div className="nav__item">Wishlist</div>
      <div className="nav__item">Cart</div>
      <div className="nav__item">Orders</div>
    </nav>
  );
};

export { Navlist };
