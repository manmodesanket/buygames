import React, { createContext, useContext, useState } from "react";

export const WishListContext = createContext();

const obj = {
  name: "A",
};

export const WishListProvider = ({ children }) => {
  return (
    <WishListContext.Provider value={{ obj }}>
      {children}
    </WishListContext.Provider>
  );
};
