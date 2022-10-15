import React from "react";
import axios from "../api/axios";
import { useEffect, useState } from "react";

const ShopContext = React.createContext();

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async (paramsObject) => {
    try {
      const data = await axios.get(`/products?${paramsObject}`);
      setProducts(data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ShopContext.Provider value={{ products, loading, getData }}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContext;
