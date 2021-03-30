import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Navbar } from "./components/Navigation/Navbar";
import { Trending } from "./components/trending/trending";
import { Explore } from "./components/Explore/Explore";
import { Wishlist } from "./components/Wishlist/Wishlist";
import { Cart } from "./components/Cart/Cart";
import { Router } from "@reach/router";
import { WishListProvider } from "./context/wishlistcontext/wishlistcontext";

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
    <WishListProvider>
      <Navbar />
      <Router>
        <Home path="/" />
        <Explore path="/explore" />
        <Wishlist path="/wishlist" />
        <Cart path="/cart" />
      </Router>
    </WishListProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
