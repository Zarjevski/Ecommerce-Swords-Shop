import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useNavigate } from "react-router-dom";
import katana from "../../assets/katana.png";

const Home = () => {
  const navigate = useNavigate();
  return (
    <section className="h-screen w-screen">
      <div className="hero h-screen flex w-full sm:flex sm:justify-center xs:flex xs:justify-center">
        <div className="info w-1/2 xs:w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 h-full flex flex-col items-center justify-center">
          <h1 className="text-4xl">REACT TYPESCRIPT TAILWIND </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Cupiditate, eaque!
          </p>
          <button
            className="rounded-md bg-red-600 p-2 m-4"
            onClick={() => navigate("/shop")}
          >
            SHOP NOW
          </button>
        </div>
        <div className="lg:flex justify-center items-center h-full w-1/2 sm:hidden xs:hidden md:hidden xl:flex">
          <div className="lg:h-3/6 lg:w-3/12 xl:h-4/6 xl:w-5/12 rounded-lg bg-black bg-opacity-40 backdrop-blur">
            <img
              className="h-full w-full rotate-12"
              src={katana}
              alt="katana"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
