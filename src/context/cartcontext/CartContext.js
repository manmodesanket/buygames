import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}
