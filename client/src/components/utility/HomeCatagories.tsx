import React from "react";
import Section from "../blocks/Section";
import H1 from "../elements/H1";
import { homeCategories } from "../../assets/links";
import { useNavigate } from "react-router-dom";

const HomeCatagories = () => {
  const navigate = useNavigate();
  return (
    <Section className="flex-col p-4 xs:hidden sm:hidden md:hidden xl:flex lg:flex">
      <H1>CATEGORIES</H1>
      <div className="grid grid-cols-3 grid-row-1 h-3/4 w-4/6  items-center gap-20">
        {homeCategories.map((category, index) => {
          return (
            <div
              key={index}
              style={{ backgroundColor: "#1D1E20" }}
              className="h-[32rem] hover:scale-105 shadow-inner hover:-translate-y-7 transition duration-500 hover:cursor-pointer flex items-center justify-center"
              onClick={() => {navigate(`${category.to}`);}}
            >
              <img
                src={category.img}
                alt={category.name}
                className="h-5/6 w-4/4 "
              />
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default HomeCatagories;
