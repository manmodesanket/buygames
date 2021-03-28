import React, { useState } from "react";
import { Navlist } from "./Navlist";
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
      </div>
      {showNav === "yes" ? <Navlist /> : null}
    </div>
  );
};

export { Navbar };
