import React from 'react';
import "../App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import ProductCart from './ProductCart';

const Product = (props) => {
    return (
      <div className='card-type'>
        <div className='mSpace'>
          <img src={props.image} alt='' height={"300px"} width={"300px"} />
          <div>
            <h1>{props.name}</h1>
            <h3>{props.price}</h3>
            <button
              className='button'
              onClick={() => {
                <ProductCart productName={props.name}></ProductCart>;
              }}
            >
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