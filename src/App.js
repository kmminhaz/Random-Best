import './App.css';

import image1 from './images/brown-leather-shoes.jpg';
import image2 from './images/fashion-running-sneaker-shoes.jpg';
import image3 from './images/fashion-shoes-sneakers-new.jpg';
import image4 from './images/fashion-shoes-sneakers.jpg';
import image5 from './images/men-shoes.jpg';
import image6 from './images/pair-trainers.jpg';
import image7 from './images/red-retro-model-tennis.jpg';
import image8 from './images/shoes.jpg';
import image9 from './images/sneakers-shoes.jpg';
import image10 from './images/sport-running-shoes.jpg';

const products = [
  { id: 1, image: image1, name: "Brown Leather Shoes", price: "450" },
  {
    id: 2,
    image: image2,
    name: "Running Sneaker",
    price: "450",
  },
  { id: 3, image: image3, name: "shoes sneakers", price: "450" },
  { id: 4, image: image4, name: "men shoes", price: "450" },
  { id: 5, image: image5, name: "pair trainers", price: "450" },
  { id: 6, image: image6, name: "retro model tennis", price: "450" },
  { id: 7, image: image7, name: "shoes", price: "450" },
  { id: 8, image: image8, name: "sneakers shoes", price: "450" },
  { id: 9, image: image9, name: "sport shoes", price: "450" },
  { id: 10, image: image10, name: "sport shoes running", price: "450" },
];

function App() {
  return (
    <div className='flex'>
      <div className='grid-type spacing'>
        {products.map((product) => (
          <ShowProducts
            id={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
          ></ShowProducts>
        ))}
      </div>
      <div className='spacing'>
        <ProductCart></ProductCart>
      </div>
    </div>
  );
}

function ShowProducts(props){
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
          </button>
        </div>
      </div>
    </div>
  );
}

function ProductCart(props){
  return (
    <div>
      <h1>Selected Shoes</h1>
      <h3>{props.productName}</h3>
      <button className='button' style={{color:'green'}}>Choos 1 For Me</button>
    </div>
  );
}

export default App;
