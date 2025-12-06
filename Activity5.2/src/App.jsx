import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [shoppingList, setShoppingList] = useState([
    { title: "React", price: "$12.99" },
    { title: "Stylish Chair", price: "$320" },
    { title: "Ergonomic Chair", price: "$270" },
    { title: "Video Game", price: "$100" },
  ]);

  function addProduct() {
    setShoppingList((curProds) => [
      ...curProds,
      { title: "New Product", price: "$4.99" },
    ]);
  }

  return (
    <>
      <button type="button" onClick={addProduct}>
        Add Product
      </button>
      <ul>
        {shoppingList.map((product, index) => (
          <li>
            {product.title} {product.price}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
