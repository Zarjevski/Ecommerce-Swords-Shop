import React from "react";
import Section from "../blocks/Section";
import Half from "../blocks/Half";
import HomeCatagories from "../utility/HomeCatagories";
import NavigationButton from "../buttons/NavigationButton";
import H1 from "../elements/H1";

const Home = () => {
  return (
    <>
      <Section className="hero flex-col">
        <Half className={"justify-center"}>
          <H1>ONLY FOR TRUE WARRIORS</H1>
          <p className="text-center">
            check out our shop for the best weapons and gear!
          </p>
          <NavigationButton text={"SHOP NOW"} to={"/shop"} />
        </Half>
      </Section>
      <HomeCatagories />
    </>
  );
};

export default Home;
