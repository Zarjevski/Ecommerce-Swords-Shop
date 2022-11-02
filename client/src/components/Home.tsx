import React from "react";
import { useNavigate } from "react-router-dom";
import katana from '../assets/katana.png'

const Home = () => {
  const navigate = useNavigate();
  return (
    <section className="h-screen w-screen">
      <div className="h-screen flex w-full">
        <div className="info w-1/2 h-full flex flex-col items-center justify-center ">
          <h1 className="text-4xl">REACT TYPESCRIPT TAILWIND </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Cupiditate, eaque!
          </p>
          <button className="rounded-full bg-slate-400 w-fit" onClick={() => navigate("/shop")}>
            SHOP NOW
          </button>
        </div>
        <div className="lg:flex justify-center items-center h-full w-1/2 sm:hidden xs:hidden md:flex xl:flex">
          <div className="w-1/2 h-5/6 rounded-lg bg-slate-500"><img className="h-full w-full rotate-12" src={katana} alt="katana" /></div>
        </div>
      </div>
      <div className="features h-1/2 bg-slate-700">
        <h1>features</h1>
      </div>
    </section>
  );
};

export default Home;
