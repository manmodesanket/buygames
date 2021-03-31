import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

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
