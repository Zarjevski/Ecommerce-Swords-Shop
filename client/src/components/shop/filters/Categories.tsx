import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="h-auto w-full mt-3 p-10 border-t border-t-slate-20 ">
      <h3 className="">CATEGORIES:</h3>
      <ul className="flex flex-col">
        <Link to={'/shop'}>All</Link>
        <Link to={'/shop/swords'}>Swords</Link>
        <Link to={'/shop/knifes'}>Knifes</Link>
        <Link to={'/shop/masks'}>Masks</Link>
        <Link to={'/shop/armor'}>Armor</Link>
      </ul>
    </div>
  );
};

export default Categories;
