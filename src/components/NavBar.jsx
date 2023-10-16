import React, { useState } from "react";
import "../styles/navbar.scss";
import search from "../assets/search.svg";
import cart from "../assets/cart.svg";
import logo from "../assets/logo.jpg"
import list from "../products";

const NavBar = ({ setShow,size  }) => {
  const [searchText, setSearchText] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const items = list.map((item) => item.name);

  const handleSearchChange = (e) => {
    const text = e.target.value;
    setSearchText(text);

    // Filter items based on the search text
    const filtered = items.filter((item) =>
      item.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <nav>
      <img
        src={logo}
        alt="webdevava"
        className="logo"
        onClick={() => setShow(true)}
      />

      <div className="searchcontainer">
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={handleSearchChange}
        />
        <button>
          <img src={search} alt="" className="searchicon" />
        </button>
      </div>
      <button className="cart" onClick={() => setShow(false)}>
        <img src={cart} alt="" />
        <span className="cartitems">{size}</span>
      </button>
      {searchText === "" ? null : (
        <div className="filtered-items">
          <ul>
            {filteredItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
