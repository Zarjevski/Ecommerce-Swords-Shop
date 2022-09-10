import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";

const ShopContext = React.createContext();

const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async (query) => {
    try {
      const response = await fetch(`/products?${query}`);
      const result = await response.json();
      setProducts(result.products);
      console.log(result);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ShopContext.Provider value={{ getProducts, products, loading }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useProductsProvider = () => {
  return useContext(ShopContext);
};

export default ShopProvider;
