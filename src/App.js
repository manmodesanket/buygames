import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Navbar } from "./components/Navigation/Navbar";
import { Trending } from "./components/trending/trending";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="main-content">
        <Trending />
        <h1>Special Offers</h1>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
