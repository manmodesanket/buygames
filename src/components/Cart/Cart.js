import React from "react";
import { useCart } from "../../context/cartcontext/CartContext";

const Cart = () => {
  let { itemsInCart } = useCart();
  return (
    <div className="main-content">
      <div className="wishlist">
        {itemsInCart &&
          itemsInCart.map((item) => (
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

export { Cart };
