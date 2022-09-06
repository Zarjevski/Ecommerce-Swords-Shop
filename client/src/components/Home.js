import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const navigateToShop = () => {
    navigate("/shop");
  };
  return (
    <section className="home">
      <div className="hero">
        <div className="image"></div>
        <div className="text">
          <h1>Lorem ipsum dolor sit.</h1>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            nobis?
          </h2>
          <button className="hero-btn" onClick={() => navigateToShop()}>
            shop now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
