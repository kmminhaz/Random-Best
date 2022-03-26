import "./App.css";

// importing all the images I need
import image1 from "./images/brown-leather-shoes.jpg";
import image2 from "./images/fashion-running-sneaker-shoes.jpg";
import image3 from "./images/fashion-shoes-sneakers-new.jpg";
import image4 from "./images/fashion-shoes-sneakers.jpg";
import image5 from "./images/men-shoes.jpg";
import image6 from "./images/pair-trainers.jpg";
import image7 from "./images/red-retro-model-tennis.jpg";
import image8 from "./images/shoes.jpg";
import image9 from "./images/sneakers-shoes.jpg";
import image10 from "./images/sport-running-shoes.jpg";
import AllProducts from "./Components/AllProducts";

// Making an "Array of ObjectS"
const products = [
  { id: 1, image: image1, name: "Leather Shoes", price: "750" },
  {
    id: 2,
    image: image2,
    name: "Running Sneaker",
    price: "450",
  },
  { id: 3, image: image3, name: "Shoes Sneakers", price: "1150" },
  { id: 4, image: image4, name: "Sen Shoes", price: "500" },
  { id: 5, image: image5, name: "Pair Trainers", price: "480" },
  { id: 6, image: image6, name: "Retro Model Tennis", price: "599" },
  { id: 7, image: image7, name: "Shoes", price: "450" },
  { id: 8, image: image8, name: "Sneakers Shoes", price: "750" },
  { id: 9, image: image9, name: "Sport Shoes", price: "450" },
  { id: 10, image: image10, name: "Sport Shoes running", price: "675" },
];

function App() {
  return (
    <div className='flex'>
      <AllProducts arrayOfProducts = {products}></AllProducts>
    </div>
  );
}


export default App;
