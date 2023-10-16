import React, { useState } from "react";
import list from "../data";
import products from "../products";
import Cards from "../Cards";
import '../styles/products.scss'

const ProductsShow = ({handleClick }) => {

  

  return (
    <section>

      {products.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick}/>
      ))}
    </section>
  );
};

export default ProductsShow;
