import React from "react";
import "./Styles/GlobalStyle.css";
import {Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import About from "./Pages/About";
import {Toaster} from "react-hot-toast";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <Navbar/>
      <Toaster position="bottom-right"/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/products" element={<Products/>} />
        <Route exact path="/product/:id" element={<ProductDetails/>} />
        <Route exact path="/cart" element={<Cart/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/contact" element={<Contact/>} />
      </Routes>
     
    </>
  );
}

export default App;