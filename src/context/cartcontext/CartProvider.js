import React, { useState } from "react";
import { CartContext } from "./CartContext";

export function CartProvider({ children }) {
  let [itemsInCart, setItemsInCart] = useState([]);
  return (
    <CartContext.Provider value={{ itemsInCart, setItemsInCart }}>
      {children}
    </CartContext.Provider>
  );
}
