import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Navbar } from "./components/Navigation/Navbar";
import { Trending } from "./components/trending/trending";
import { Explore } from "./components/Explore/Explore";
import { Wishlist } from "./components/Wishlist/Wishlist";
import { Cart } from "./components/Cart/Cart";
import { Router } from "@reach/router";

const Home = () => {
  return (
    <div className="main-content">
      <Trending />
      <h1>Special Offers</h1>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Navbar />
      <Router>
        <Home path="/" />
        <Explore path="/explore" />
        <Wishlist path="/wishlist" />
        <Cart path="/cart" />
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
