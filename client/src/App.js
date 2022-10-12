// imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import Account from "./components/user/Account";
import Navbar from "./components/Navbar";
import Cart from "./components/cart/Cart";
import Error from "./components/Error";
import Footer from "./components/Footer";
import Register from "./components/user/Register";
import Shop from './components/shop/Shop'
// end of imports

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop/>} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/account" element={<Account/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
