import React from "react";
import ReactDOM from "react-dom";
import { Navbar } from "./components/Navigation/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="main-content">
        <h1>Trending Games</h1>
        <h1>All Time Greats</h1>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
