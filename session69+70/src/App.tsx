import React from "react";
import Cart from "./components/cart/Cart";
import "./App.css";
import Products from "./components/product/Products";
export default function App() {
  return (
    <div className="container">
      <Products></Products>
      <Cart></Cart>  
    </div>
  );
}
