import React, { createContext, useContext, useState } from "react";

export const WishListContext = createContext();

export function useWishlist() {
  return useContext(WishListContext);
}
