import React from 'react';
import "../App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";


const Product = (props) => {

  // Destructuring the "product" Array & "addToCart" function
  const {product, addToCart} = props;

    return (
      <div className='card-type'>
        <div className='mSpace'>

          {/* Setting Each of the "product"  */}
          <img src={product.image} alt=''/>
          <div>
            <h1>{product.name}</h1>
            <h3>price: ${product.price}</h3>

            {/* Button for "Add To Cart" */}
            <button className='button' onClick={() => {
              addToCart(product.name);
            }}>
              {" "}
              Add To Cart{" "}

              {/* Setting an "Icon" to the button*/}
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