import React, { useEffect } from "react";
import Grid from "./Grid";
import Filters from "./Filters";


const Shop = () => {
  return (
    <section className="w-full h-screen flex sm:justify-center xs:justify-center">
      <Filters />
      <Grid />
    </section>
  );
};

export default Shop;
