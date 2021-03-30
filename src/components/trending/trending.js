import React, { useState, useEffect } from "react";
import "./trending.css";

const Trending = () => {
  let [trending, setTrending] = useState([]);

  useEffect(() => {
    let list = [
      {
        id: "1",
        name: "Minecraft",
        img:
          "https://i.pinimg.com/736x/e7/41/fc/e741fccceb24d55e0d1aa3ef5b75ee03.jpg",
        price: 150,
      },
      {
        id: "2",
        name: "GTA V",
        img:
          "https://m.media-amazon.com/images/M/MV5BZTI4YWM0YjItNTk4Mi00N2NkLTlkZjItOGIzNTdmZTQyOTk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
        price: 150,
      },
      {
        id: "3",
        name: "Fortnite",
        img:
          "https://cultureposters.com/wp-content/uploads/2019/08/fortnite.jpg",
        price: 150,
      },
      {
        id: "4",
        name: "Apex Legends",
        img:
          "https://i.pinimg.com/originals/1a/9c/d1/1a9cd17aeeb8d448bdf4d65b96e1650a.jpg",
        price: 150,
      },
    ];
    setTrending(list);
  }, []);

  return (
    <div>
      <h1>Trending Games</h1>
      <div className="trending-list">
        {trending.map((item) => (
          <div key={item.id} className="card">
            <img src={item.img} alt="img" className="card__image" />
            <div className="card__body">
              <button className="card__body__button">Add to WishList</button>
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

export { Trending };
