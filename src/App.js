import React from "react";
import "./Styles/GlobalStyle.css";
import {Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
      </Routes>
     
    </>
  );
}

export default App;
