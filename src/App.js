import React from "react";
import "./Styles/GlobalStyle.css";
import {Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/products" element={<Products/>} />
        <Route exact path="/product/:id" element={<ProductDetails/>} />
      </Routes>
     
    </>
  );
}

export default App;