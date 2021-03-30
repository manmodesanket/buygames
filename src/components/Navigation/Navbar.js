import React, { useState } from "react";
import { VerticalNavlist } from "./VerticalNavlist";
import { HorizontalNav } from "./HorizontalNav";
import "./navbar.css";

const Navbar = () => {
  const [showNav, setShowNav] = useState("no");

  const handleNav = () => {
    if (showNav === "yes") setShowNav("no");
    else setShowNav("yes");
  };

  return (
    <div>
      <div className="navbar">
        <button onClick={handleNav} className="toggler">
          <i className="material-icons">menu</i>
        </button>
        <HorizontalNav />
      </div>
      {showNav === "yes" ? <VerticalNavlist /> : null}
    </div>
  );
};

export { Navbar };
