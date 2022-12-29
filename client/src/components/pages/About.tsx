import React from "react";
import Section from "../blocks/Section";
import Box from "../blocks/Box";
import Card from "../blocks/Card";

const About = () => {
  return (
    <Section>
      <Box>
        <>
        <Card>
          <div className="h-full w-full bg-white">
            <img src="" alt="" className="h-full w-full" />
          </div>
        </Card>
        <div className="w-1/2 p-10 flex flex-col items-center">
          <h1 className="text-4xl">WHO ARE WE?</h1>
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
        </div>
        </>
      </Box>
    </Section>
  );
};

export default About;
