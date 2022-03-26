import React from 'react';
import "../App.css";

const ProductCart = (props) => {
    return (
      <div>
        {console.log(props)}
        <h1>Selected Shoes</h1>
        <h3>{props.productName}</h3>
        <button className='button' style={{ color: "green" }}>
          Choos 1 For Me
        </button>
      </div>
    );
};

export default ProductCart;