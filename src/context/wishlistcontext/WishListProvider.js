import React, { useReducer, useState } from "react";
import { reducerFunction } from "../../reducers/WishlistReducer/Reducer";
import { WishListContext } from "./wishlistcontext";

export const WishListProvider = ({ children }) => {
  let [wishList, dispatch] = useReducer(reducerFunction, []);
  return (
    <WishListContext.Provider value={{ wishList, wishListDispatch: dispatch }}>
      {children}
    </WishListContext.Provider>
  );
};
