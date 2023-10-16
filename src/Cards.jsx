import React from "react";
import addcart from './assets/addcart.svg'
import './styles/cards.scss'

const Cards = ({ item,handleClick }) => {
  const { id, name, description, price, imageUrl } = item;
  return (
    <div className="card">
      <div className="img_box"> 
      <img src={imageUrl} alt="" />
      </div>
        <div className="details">
          <p className="name">{name}</p>
          <p className="price"><span>₹</span>{price}</p>
          <button onClick={()=> handleClick(item)}><img src={addcart} alt="" /><span>Add To Cart</span></button>
        </div>

    </div>
  );
};

export default Cards;
