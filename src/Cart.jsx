import React, { useState, useEffect } from "react";
import "./styles/cart.scss";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      {cart.map((item) => ( 
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.imageUrl} alt="" />
            <p>{item.name}</p>
          </div>
          <div className="buttons">
            <button onClick={() => handleChange(item, 1)}>+</button>
            <p>{item.amount}</p>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div className="price_container">
            <span><span>₹</span>{item.price}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <p>Total Price of your Cart</p>
        <span>₹ {price}</span>
      </div>
    </article>
  );
};

export default Cart;