import React from "react";
import samurai from "../../assets/samurai.jpg"
import Section from "../blocks/Section";
import Box from "../blocks/Box";
import H1 from "../elements/H1";
import Half from "../blocks/Half";

const About = () => {
  return (
    <Section>
      <Box>
        <Half className="xs:hidden sm:hidden md:flex lg:flex xl:flex">
            <img src={samurai} alt="" className="h-full w-full" />
        </Half>
        <Half className="xs:w-full xs:overflow-y-auto">
          <H1>WHO ARE WE?</H1>
          <p className="mt-4 text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil ad
            magni rem culpa at architecto consequatur odio cum aliquid fugit,
            provident deleniti a sit harum error accusamus perferendis facilis
            amet quas voluptatem corrupti odit adipisci perspiciatis. Pariatur
            nam veniam quae nesciunt optio molestias odio sunt praesentium,
            autem quas? Eveniet reiciendis repellendus voluptatum necessitatibus
            exercitationem libero aliquam iure! Assumenda quae sed culpa ullam,
            sit corporis suscipit similique repellat soluta fugit, quos quia
            eligendi ipsum adipisci accusantium laudantium neque reiciendis, quo
            dignissimos quidem id fugiat error a nihil. Ad accusamus dolores
            cum? Natus saepe illo commodi maiores iure debitis nisi ab aliquam!
          </p>
        </Half>
      </Box>
    </Section>
  );
};

export default About;
