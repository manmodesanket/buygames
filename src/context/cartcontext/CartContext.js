import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

function logger() {
  console.log("carting");
}

const obj = {
  cartItems: 4,
  logger: logger,
};

export function CartProvider({ children }) {
  let [itemsInCart, setItemsInCart] = useState([]);
  return (
    <CartContext.Provider value={{ itemsInCart, setItemsInCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
