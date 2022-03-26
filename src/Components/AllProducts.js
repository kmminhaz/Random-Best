import React from "react";
import "../App.css";
import { useState } from "react";

import ShopProduct from "./ShopProduct";

const AllProducts = (props) => {
  const products = props.arrayOfProducts;

  // using state for "Add To Cart" Button
  const [cart, setcart] = useState([]);
  const handleAddToCart = (ProductName) => {
    if (cart.length < 4) {
      const newCart = [...cart, ProductName];
      setcart(newCart);
    } else {
      console.log("Are you mad or somthing?");
    }
  };

  // using "useState" for Choosing One Button
  const [bestone, setbestone] = useState([]);

  return (
    <div className='flex'>

      {/* All Products */}
      <div className='grid-type spacing' id='products'>
        {products.map((product) => (
          <ShopProduct
            id={product.id}
            product={product}
            addToCart={handleAddToCart}
          ></ShopProduct>
        ))}
      </div>

      {/* Cart part */}
      <div className='spacing' id='cart'>
        <h1>Selected Shoes</h1>
        <div id='cartItems'>
          <h3>{cart[0]}</h3>
          <h3>{cart[1]}</h3>
          <h3>{cart[2]}</h3>
          <h3>{cart[3]}</h3>
        </div>

        {/* Button For Generating Best One */}
        <button
          onClick={generateRandom}
          className='button'
          style={{ color: "green" }}
        >
          Choos 1 For Me
        </button>
        <h3>{bestone}</h3>

        {/* Button For Removing All From The Cart */}
        <button onClick={removeAll} className='button' style={{ color: "red" }}>
          Choose Again
        </button>
      </div>
    </div>
  );

  // calculating random product
  function generateRandom() {
    const randomValue = Math.floor(Math.random() * (3 - 0)) + 0;
    const newbestone = `The best one is ` + cart[randomValue];
    setbestone(newbestone);
  }

  // removing all from the cart
  function removeAll() {
    const newbestone = "";
    const newCart = [];
    setbestone(newbestone);
    setcart(newCart);
  }
};

export default AllProducts;
