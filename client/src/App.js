// imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Error from "./components/Error";
import Footer from "./components/Footer";
import Shop from "./components/shop/Shop";
// end of imports

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
