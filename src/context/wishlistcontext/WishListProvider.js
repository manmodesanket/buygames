import React, { useState } from "react";
import { WishListContext } from "./wishlistcontext";

export const WishListProvider = ({ children }) => {
  let [itemsInWishList, setItemsInWishList] = useState([]);
  return (
    <WishListContext.Provider value={{ itemsInWishList, setItemsInWishList }}>
      {children}
    </WishListContext.Provider>
  );
};
