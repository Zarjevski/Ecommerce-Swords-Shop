import React from "react";
import Section from "../blocks/Section";
import Box from "../blocks/Box";
import Card from "../blocks/Card";
import H1 from "../elements/H1";

const About = () => {
  return (
    <Section>
      <Box>
        <Card>
            <img src="" alt="" className="h-full w-full" />
        </Card>
        <div className="w-2/4 p-5">
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
          </div>
      </Box>
    </Section>
  );
};

export default About;
