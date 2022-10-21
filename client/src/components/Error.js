import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  const backToHome = () => {
    navigate("/");
  };
  return (
    <section className="error-section">
      <div>
        <h1>page not found</h1>
        <button onClick={() => backToHome()}>back to home</button>
      </div>
    </section>
  );
};

export default Error;
