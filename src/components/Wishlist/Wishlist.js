import React, { useContext } from "react";
import { WishListContext } from "../../context/wishlistcontext/wishlistcontext";
import "./wishlist.css";

const Wishlist = () => {
  let { itemsInWishList } = useContext(WishListContext);
  console.log(itemsInWishList);
  return (
    <div className="main-content">
      <div className="wishlist">
        {itemsInWishList &&
          itemsInWishList.map((item) => (
            <div key={item.id} className="card">
              <img src={item.img} alt="img" className="card__image" />
              <div className="card__body">
                <div className="card__header">
                  <div className="card__name">{item.name}</div>
                </div>
                <div className="card__price">Rs. {item.price}</div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export { Wishlist };
