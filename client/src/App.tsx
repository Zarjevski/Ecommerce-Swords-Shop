import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/shop/Shop";
import Account from "./components/user/Account";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/about" />
        <Route path="/account" element={<Account/>}/>
        <Route path="/cart" />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
