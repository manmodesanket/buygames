import React, { useReducer, useState } from "react";
import { reducerFunction } from "../../reducers/CartReducer/CartReducer";
import { CartContext } from "./CartContext";

export function CartProvider({ children }) {
  let [cartList, dispatch] = useReducer(reducerFunction, []);
  return (
    <CartContext.Provider value={{ cartList, cartDispatch: dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
