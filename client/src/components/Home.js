import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const navigateToShop = () => {
    navigate("/shop");
  };
  return (
    <>
      <section className="home">
        <div className="hero">
          <div className="text">
            <h1>Ready for battle?</h1>
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, nobis?
            </h2>
            <button className="hero-btn" onClick={() => navigateToShop()}>
              shop now
            </button>
          </div>
        </div>
        <div className="features">
          <h1 style={{ textAlign: "center", fontSize: "5rem" }}>Features</h1>
        </div>
      </section>
    </>
  );
};

export default Home;
