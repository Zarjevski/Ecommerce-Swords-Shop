import React from "react";
import HomeCatagories from "../HomeCatagories";
import FullSection from "../blocks/FullSection";
import NavigationButton from "../buttons/NavigationButton";
import H1 from "../Headings/H1";

const Home = () => {
  return (
    <>
      <FullSection additional={"hero"}>
        <div className="info w-1/2 xs:w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 h-full flex flex-col items-center justify-center">
          <H1>ONLY FOR TRUE WARRIORS</H1>
          <p className="text-center">
            Looking for a new sword? need a weapon with bleeding edge?
            <br />
            check out our shop for the best weapons and gear!
          </p>
          <NavigationButton text={"SHOP NOW"} to={"/shop"} />
        </div>
      </FullSection>
      <HomeCatagories />
    </>
  );
};

export default Home;
