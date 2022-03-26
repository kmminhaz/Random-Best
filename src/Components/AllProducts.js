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
          <h3>{cart[0]}</h3>
          <h3>{cart[1]}</h3>
          <h3>{cart[2]}</h3>
          <h3>{cart[3]}</h3>
          
          <button onClick={generateRandom} className='button' style={{ color: "green" }}>
            Choos 1 For Me
          </button>
        </div>
      </div>
    );
};

function generateRandom(){
    const randomValue = Math.floor(Math.random() * (3 - 0) ) + 0;
    console.log(randomValue);
}

export default AllProducts;