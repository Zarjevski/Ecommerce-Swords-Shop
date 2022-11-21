import React from "react";
import Grid from "./Grid";
import Filters from "./Filters";


const Shop = () => {
  
  return (
    <section className="w-full h-screen flex sm:justify-center xs:justify-center xs:min-h-fit">
      <Filters />
      <Grid/>
    </section>
  );
};

export default Shop;
