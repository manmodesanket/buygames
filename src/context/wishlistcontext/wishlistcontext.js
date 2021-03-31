import React, { createContext, useContext, useState } from "react";

export const WishListContext = createContext();

const obj = {
  name: "A",
};

export const WishListProvider = ({ children }) => {
  let [itemsInWishList, setItemsInWishList] = useState([]);
  return (
    <WishListContext.Provider value={{ itemsInWishList, setItemsInWishList }}>
      {children}
    </WishListContext.Provider>
  );
};

export function useWishlist() {
  return useContext(WishListContext);
}
