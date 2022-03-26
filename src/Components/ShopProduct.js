import React from 'react';
import "../App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";


const Product = (props) => {
  // Destructuring
  const {product, addToCart} = props;

    return (
      <div className='card-type'>
        <div className='mSpace'>
          <img src={product.image} alt='' height={"300px"} width={"300px"} />
          <div>
            <h1>{product.name}</h1>
            <h3>{product.price}</h3>
            <button className='button' onClick={() => {
              addToCart(product.name);
            }}>
              {" "}
              Add To Cart{" "}
              <FontAwesomeIcon
                className='btnIcon'
                icon={faShoppingCart}
              ></FontAwesomeIcon>
            </button>
          </div>
        </div>
      </div>
    );
};

export default Product;