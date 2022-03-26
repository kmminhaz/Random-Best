import React from 'react';
import '../App.css';
import { useState } from 'react';

import ShopProduct from './ShopProduct';

const AllProducts = (props) => {

  const products = props.arrayOfProducts;

    const [cart, setcart] = useState([]);
    const handleAddToCart = (ProductName) => {
      if(cart.length < 4){
        const newCart = [...cart, ProductName];
        setcart(newCart);
      }
      else{
        console.log("Are you mad or somthing?");
      }
    };

    const [bestone, setbestone] = useState([]);

    return (
      <div className='flex'>
        <div className='grid-type spacing' id='products'>
          {products.map((product) => (
            <ShopProduct
              id={product.id}
              product={product}
              addToCart={handleAddToCart}
            ></ShopProduct>
          ))}
        </div>
        <div className='spacing' id='cart'>
          <h1>Selected Shoes</h1>
          <div id='cartItems'>
            <h3>{cart[0]}</h3>
            <h3>{cart[1]}</h3>
            <h3>{cart[2]}</h3>
            <h3>{cart[3]}</h3>
          </div>
          <button
            onClick={() => {
              const randomValue = Math.floor(Math.random() * (3 - 0)) + 0;
              const newbestone = `Best one among these is ` + cart[randomValue];
              setbestone(newbestone);
            }}
            className='button'
            style={{ color: "green" }}
          >
            Choos 1 For Me
          </button>
          <h3>{bestone}</h3>
          <br />
          <button
            onClick={() => {
              const newbestone = "";
              const newCart = [cart, ""];
              
              setbestone(newbestone);
              setcart(newCart);
            }}
            className='button'
            style={{ color: "red" }}
          >
            Choose Again
          </button>
        </div>
      </div>
    );
};

// function generateRandom(){
//     const randomValue = Math.floor(Math.random() * (3 - 0) ) + 0;
//     console.log(randomValue);
// }

export default AllProducts;