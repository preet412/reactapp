import React from "react";
//import "./App.css";
//import  "./node_modules/dist/css/bootstrap.min.css";
//import Data from "./components/Data";
import Products from "./components/Products.js";
import Items from "./components/Items";
import Cart from "./components/Cart";
import { CartProvider } from "react-use-cart";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home.js";
import Signup from "./components/Signup.js";
import Login from "./components/Login.js";

function App() {
  return (
    //<div className="App"></div>
    <CartProvider>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Items" element={<Items />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </CartProvider>

    /*<CartProvider>
    
        <PrivateRoute path="/onlyAuthorizedAllowedHere/" component={Login} />
  
          <Items />
          <Cart />
           <Home />
      <Signup />
      <Login />
        </CartProvider>*/
    //</div>
  );
}

export default App;
